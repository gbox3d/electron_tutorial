//console.log('hello');

function appMain() {

    let canvas = document.getElementById('canvas_box_texture');
    let context = canvas.getContext('2d');

    function loop_main() {

        context.setTransform(1, 0, 0, 1, canvas.width / 2, canvas.height / 2); //변환행렬 초기화

        context.fillStyle = 'blue';
        context.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

        context.beginPath();
        context.moveTo(-canvas.width / 2, 0);
        context.lineTo(canvas.width / 2, 0);
        context.stroke()
        context.beginPath();
        context.moveTo(0, -canvas.height / 2);
        context.lineTo(0, canvas.height / 2);
        context.stroke();

        //test_obj.draw(context);

        requestAnimationFrame(loop_main);

    }

    loop_main();

}

appMain();


