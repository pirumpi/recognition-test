const minConfidence = 0.1
const maxResults = 10
const videoElement = document.querySelector('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let faceCoords = null;

const tracker = new tracking.ObjectTracker('face');
tracker.setInitialScale(3);
tracker.setStepSize(2);
tracker.setEdgesDensity(0.1);

const app = new Vue({
    el: '.app',
    data: {
        images: []
    },
    methods: {
        addImage: () => {
            const cnvs = document.createElement('canvas');
            console.log(faceCoords)

        }
    }
});

videoElement.oncanplay = () => {
    detectFaces();
};

tracker.on('track', event => {
    // document.querySelector('.camera').classList.remove('hide');
    // console.log(event)

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    event.data.forEach(rect => {
        faceCoords = rect;
        ctx.strokeStyle = '#a64ceb';
        ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
        ctx.font = '11px Helvetica';
        ctx.fillStyle = "#ff0000";
        ctx.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
        ctx.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
    });
});


function getCanvas() {
    const canvas = document.createElement('canvas');
}

function startVideo() {
    tracking.track('#video', tracker, {
        camera: true
    });
}

async function loadModels() {
    await faceapi.loadFaceDetectionModel('/models');
    await faceapi.loadFaceRecognitionModel('/models');
    document.querySelector('.model-progress').classList.add('hide');
    startVideo();
}

async function detectFaces() {
    const {
        width,
        height
    } = faceapi.getMediaDimensions(videoElement);
    //canvas.width = width;
    //canvas.height = height;
    const descriptor1 = await faceapi.computeFaceDescriptor('video');

    //requestAnimationFrame(() => detectFaces());
}

loadModels();
