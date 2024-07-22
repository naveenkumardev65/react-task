import React, { useRef, useState, useEffect } from 'react';
import styles from './styles.module.css';
import html2canvas from 'html2canvas';

function ScribblePad() {

    const canvasRef = useRef(null);
    const [drawing, setDrawing] = useState(false);
    const [color, setColor] = useState('#000000');
    const [context, setContext] = useState(null);
    const [isErase, setIsErase] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        setContext(canvas.getContext('2d'));
        canvas.width = 260;
        canvas.height = 200;
    }, []);


    const startDrawing = (e) => {
        if (isErase) {
            context.strokeStyle = 'White';
            context.lineWidth = 10;
        } else {
            context.strokeStyle = color;
            context.lineWidth = 2;
        }

        context.lineCap = 'round';
        context.beginPath();
        context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setDrawing(true);
    };

    const draw = (e) => {
        if (!drawing) return;
        // context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        console.log(context)

        // console.log('e.nativeEvent.offsetX', e.nativeEvent.offsetX)
        // console.log('e.nativeEvent.offsety', e.nativeEvent.offsetY)

        // context.rect(e.nativeEvent.offsetX, e.nativeEvent.offsetY, )
        context.stroke();




    };

    const stopDrawing = () => {
        context.closePath();
        setDrawing(false);
    };

    const clearCanvas = () => {
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    };

    const saveDrawing = () => {
        html2canvas(canvasRef.current).then((canvas) => {
            const link = document.createElement('a');
            link.download = 'image.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    };

    return <div className={styles.scribble_widget_container}>
        <h3 className={styles.header}>ScribblePad Widget</h3>
        <div className={styles.drawing_pad_container}>
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                style={{
                    border: '1px solid #ccc',
                    display: 'block',
                    borderRadius: '10px',
                    cursor: isErase ? 'crosshair' : 'default'
                }}
            ></canvas>
            <div className={styles.footer}>
                <input
                    type="color"
                    value={color}
                    className={styles.color_input}
                    onChange={(e) => setColor(e.target.value)}
                />
                <button className={styles.btn} onClick={clearCanvas}>Clear</button>
                <button className={styles.btn} onClick={saveDrawing}>Save</button>
                <button className={styles.btn} onClick={() => setIsErase(false)}>{'Draw'}</button>
                <button className={styles.btn} onClick={() => setIsErase(true)}>{`Erase`}</button>
            </div>
        </div>
    </div>;
}

export default ScribblePad;



















// const saveState = () => {
//     const canvas = canvasRef.current;
//     const dataURL = canvas.toDataURL();
//     setUndoStack((prevStack) => [...prevStack, dataURL]);
// };

// const undo = () => {
//     if (undoStack.length === 0) return;

//     const lastState = undoStack[undoStack.length - 1];
//     setUndoStack((prevStack) => prevStack.slice(0, -1));

//     const img = new Image();
//     img.src = lastState;
//     img.onload = () => {
//         context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//         context.drawImage(img, 0, 0);
//     };
// };