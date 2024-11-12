<template>
    <div class="uw">
        <button type="button" v-on:click="open" id="upload_widget" class="cloudinary-button">
            Upload files
        </button>

    </div>
</template>

<script>
const cloudName = import.meta.env.VITE_APP_ClOUDINARY_NAME; // replace with your own cloud name
const uploadPreset = import.meta.env.VITE_APP_ClOUDINARY_PRESET; // replace with your own upload preset


const myWidget = cloudinary.createUploadWidget(
    {
        cloudName: cloudName,
        uploadPreset: uploadPreset,

    },
    (error, result) => {
        if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            document
                .getElementById("uploadedimage")
                .setAttribute("src", result.info.secure_url);
        }
    }
);

export default {
    name: "UploadWidget",
    data: () => ({
        open: function () {
            myWidget.open();
        },
    }),
    props: {
        msg: String,
    },
};
</script>