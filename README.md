# dropzone-nuxt
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-leaflet/latest.svg?style=flat-square)](https://npmjs.com/package/dropzone-nuxt)
[![npm](https://img.shields.io/npm/dt/nuxt-leaflet.svg?style=flat-square)](https://npmjs.com/package/dropzone-nuxt)
[![Dependencies](https://david-dm.org/schlunsen/nuxt-leaflet/status.svg?style=flat-square)](https://david-dm.org/schlunsen/dropzone-nuxt)

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
    <dropzone ref="myDropzone" id="dropzone" :options="dropzoneOptions" />
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
    }
}

</script>


```




