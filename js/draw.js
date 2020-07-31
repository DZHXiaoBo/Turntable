/**画小圆点
 * @param {Object} ctx
 * @param {Object} rBig 大圆的半径
 * @param {Object} x 大圆的x
 * @param {Object} y 大圆的y
 * @param {Object} r 小圆点的半径
 * @param {Object} count 小圆点数量
 */
function drawPoint(ctx, rBig, x, y, r, count) {
	var point = getPoint(rBig, x, y, count, point)
	for (var i = 0; i < count; i++) {
		drawCircle(ctx, point[i].x, point[i].y, r, "white")
	}
}

/*
 * 求圆周上等分点的坐标
 * ox,oy为圆心坐标
 * r为半径
 * count为等分个数
 */
function getPoint(r, ox, oy, count) {
	var point = []; //结果
	var radians = (Math.PI / 180) * Math.round(360 / count), //弧度
		i = 0;
	for (; i < count; i++) {
		var x = ox + r * Math.sin(radians * i),
			y = oy + r * Math.cos(radians * i);

		point.unshift({
			x: x,
			y: y
		}); //为保持数据顺时针
	}
	return point
}

/**
 * 画中心的扇形
 */
function drawSector(ctx, valueArray, x, y, r, rText) {
	ctx.lineWidth = 0
	var tempAngle = 225;
	var deg = Math.PI / 180;
	var currentAngle = tempAngle + 180 / 8
	for (var i = 0; i < valueArray.length; i++) {
		ctx.beginPath();
		ctx.moveTo(x, y);
		//当前扇形的角度
		var angle = 1 / valueArray.length * 360;
		ctx.fillStyle = valueArray[i].color;
		//开始从 tempAngle绘制
		var startAngle = tempAngle * deg;
		//从tempAngle绘制到 我们自己的angle区域
		var endAngle = (tempAngle + angle) * deg;
		//参数： centerPoint，centerPoint 圆心坐标，  r：半径
		// startAngle：开始绘制的弧度
		// endAngle：结束绘制的弧度
		ctx.arc(x, y, r, startAngle, endAngle, false);
		ctx.fill();
		// 绘制扇形上的文字
		ctx.font = "20px Georgia";
		ctx.fillStyle = 'white';
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText(valueArray[i].title,
			x + Math.cos(2 * Math.PI / 360 * currentAngle) * rText,
			y + Math.sin(2 * Math.PI / 360 * currentAngle) * rText);

		tempAngle -= angle; //下一次绘制的起始角度
		currentAngle -= angle
	}
	// var num = valueArray.length
	// for (var i = 0; i < num; i++) {
	// 	//保存当前状态
	// 	ctx.save();
	// 	// 开始一条新的路径
	// 	ctx.beginPath();
	// 	// 位移到圆心. 下面需要围绕圆心旋转
	// 	ctx.translate(x, y);
	// 	// 从 0 . 0 坐标开始定义一条新的子路径
	// 	ctx.moveTo(0, 0);
	// 	// 旋转弧度, 需将角度转换为弧度. 使用 degrees * Math.PI/180 公式进行计算
	// 	ctx.rotate((360 / num * i + 360 / num) * Math.PI / 180);
	// 	// 绘制圆弧
	// 	ctx.arc(0, 0, r, 0, 2 * Math.PI / num, false);
	// 	ctx.fillStyle = valueArray[i].color
	// 	// 填充扇形
	// 	ctx.fill();

	// 	// 添加文字fff
	// 	ctx.font = "20px Georgia";
	// 	ctx.fillStyle = 'white';
	// 	let sum = i + 1;
	// 	ctx.fillText(valueArray[i].title, 70, 50);
	// 	//  恢复到前一个状态
	// 	ctx.restore();
	// };
}

/**
 * 按钮上的文字
 */
function drawableButtonText(ctx, text, centerPointX, centerPointY) {
	ctx.font = "30px Georgia";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillStyle = "white"
	ctx.fillText(text, centerPointX, centerPointY);
}

/** 画圆
 * @param {Object} x 中心点的x坐标
 * @param {Object} y 中心点的y坐标
 * @param {Object} r 半径
 * @param {Object} color 填充的颜色
 */
function drawCircle(ctx, x, y, r, color) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI);
	ctx.fillStyle = color
	ctx.fill()
}

/** 画弧度
 * @param {Object} ctx
 * @param {Object} x 中心点的x坐标
 * @param {Object} y 中心点的y坐标
 * @param {Object} r 半径
 * @param {Object} startRad 开始位置
 * @param {Object} endRad 结束位置
 * @param {Object} anticlockwise 是否逆时针
 */
function drawArc(ctx, x, y, r, startRad, endRad, anticlockwise) {
	ctx.beginPath();
	ctx.arc(x, y, r, startRad, endRad, anticlockwise);
	ctx.strokeStyle = "white"
	ctx.stroke();
}

/** 画线
 * @param {Object} ctx
 * @param {Object} startX
 * @param {Object} startY
 * @param {Object} endX
 * @param {Object} endY
 */
function drawLine(ctx, startX, startY, endX, endY) {
	ctx.moveTo(startX, startY)
	ctx.lineTo(endX, endY)
	ctx.stroke()
}
