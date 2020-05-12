# dropzone-nuxt
[![npm (scoped with tag)](https://img.shields.io/npm/v/dropzone-nuxt/latest.svg?style=flat-square)](https://npmjs.com/package/dropzone-nuxt)
[![npm](https://img.shields.io/npm/dt/dropzone-nuxt.svg?style=flat-square)](https://npmjs.com/package/dropzone-nuxt)
[![Dependencies](https://david-dm.org/schlunsen/dropzone-nuxt/status.svg?style=flat-square)](https://david-dm.org/schlunsen/dropzone-nuxt)

A Dropzone.js module for Nuxt.js.

## Installation

```bash
$ npm i dropzone-nuxt --save
```

## Setup
- Add `dropzone-nuxt` dependency using yarn or npm to your project
- Add `dropzone-nuxt` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'dropzone-nuxt',

    // With options
    ['dropzone-nuxt', { /* module options */ }],
 ]
}
```

## Usage
```vue
<template>
    <dropzone 
    @vdropzone-file-added="onFileAdded"
    @vdropzone-error="onError"
    @vdropzone-success="onSuccess"
    @vdropzone-complete="onComplete"
    ref="myDropzone" id="dropzone" :options="dropzoneOptions" />
</template>

<script>

export default {
    data() {
        return {
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: { "My-Awesome-Header": "header value" }
            }
        }
    },
    methods: {
        onFileAdded(e) {

        },
        onError(e) {

        },
        onSuccess(e) {

        },
        onComplete(e) {

        }


    }
}

</script>


```




