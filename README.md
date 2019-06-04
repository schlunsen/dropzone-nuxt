# nuxt-dropzone

A module for Nuxt.js.

## Installation

```bash
$ npm i nuxt-dropzone --save
```

## Setup
- Add `nuxt-dropzone` dependency using yarn or npm to your project
- Add `nuxt-dropzone` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-dropzone',

    // With options
    ['nuxt-dropzone', { /* module options */ }],
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




