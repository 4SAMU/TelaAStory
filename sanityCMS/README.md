# Sanity Blogging Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- Check out the example frontend: [React/Next.js](https://github.com/sanity-io/tutorial-sanity-blog-react-next)
- [Read the blog post about this template](https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)



## Quick start

1. Clone this repo
2. `cd` into the folder and run `npm install`
3. Run `npm start` to start the studio
4. Open [http://localhost:3333](http://localhost:3333) in your browser

## Deploying to production

To deploy your studio, use the [Sanity.io dashboard](https://www.sanity.io/docs/deployment?utm_source=readme) and select the project you want to deploy. You can also use the [sanity CLI](https://www.sanity.io/docs/cli?utm_source=readme) and run `sanity deploy`.

## Learn more

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Read the blog post about this template](https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)

## License

MIT © [Sanity.io](https://www.sanity.io/)
```

### 2. Create a new project

```bash
sanity init
```

### 3. Create a new dataset

```bash
sanity dataset create <dataset-name>
```

### 4. Create a new schema

```bash
sanity schema create
```

### 5. Create a new document type

```bash
sanity documents create <document-type>
```

### 6. Create a new field

```bash
sanity fields create <field-name>
```

### 7. Create a new field with a specific type

```bash
sanity fields create <field-name> --type <field-type>
```

### 8. Create a new field with a specific type and options

```bash
sanity fields create <field-name> --type <field-type> --options <field-options>
```

### 9. Create a new field with a specific type, options and validations

```bash
sanity fields create <field-name> --type <field-type> --options <field-options> --validations <field-validations>
```

### 10. Create a new field with a specific type, options, validations and a custom title

```bash
sanity fields create <field-name> --type <field-type> --options <field-options> --validations <field-validations> --title <field-title>
```

### 11. Create a new field with a specific type, options, validations, a custom title and a custom description

```bash
sanity fields create <field-name> --type <field-type> --options <field-options> --validations <field-validations> --title <field-title> --description <field-description>
```

### 12. Create a new field with a specific type, options, validations, a custom title, a custom description and a custom placeholder

```bash
sanity fields create <field-name> --type <field-type> --options <field-options> --validations <field-validations> --title <field-title> --description <field-description> --placeholder <field-placeholder>
```

### 13. Create a new field with a specific type, options, validations, a custom title, a custom description, a custom placeholder and a custom hint

```bash
sanity fields create <field-name> --type <field-type> --options <field-options> --validations <field-validations> --title <field-title> --description <field-description> --placeholder <field-placeholder> --hint <field-hint>
```

### 14. Create a new field with a specific type, options, validations, a custom title, a custom description, a custom placeholder, a custom hint and a custom icon

```bash

sanity fields create <field-name> --type <field-type> --options <field-options> --validations <field-validations> --title <field-title> --description <field-description> --placeholder <field-placeholder> --hint <field-hint> --icon <field-icon>
```


## License

MIT © [Sanity.io](https://www.sanity.io/)

[npm-image]: https://badge.fury.io/js/sanity-plugin-field-creator.svg
[npm-url]: https://npmjs.org/package/sanity-plugin-field-creator

[travis-image]: https://travis-ci.com/sanity-io/sanity-plugin-field-creator.svg?branch=master
[travis-url]: https://travis-ci.com/sanity-io/sanity-plugin-field-creator

[codecov-image]: https://codecov.io/gh/sanity-io/sanity-plugin-field-creator/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/sanity-io/sanity-plugin-field-creator

[download-image]: https://img.shields.io/npm/dm/sanity-plugin-field-creator.svg
[download-url]: https://npmjs.org/package/sanity-plugin-field-creator

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://raw.githubusercontent.com/sanity-io/sanity-plugin-field-creator/master/LICENSE

[slack-image]: https://slack.sanity.io/badge.svg
[slack-url]: https://slack.sanity.io/
