# Laravel Package Generator

![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/verschuur/generator-laravel-package-scaffolder.svg?style=flat-square) 
![Scrutinizer](https://img.shields.io/scrutinizer/g/verschuur/generator-laravel-package-scaffolder.svg?style=flat-square) ![Travis (.org)](https://img.shields.io/travis/verschuur/generator-laravel-package-scaffolder.svg?style=flat-square)

  - [What's this about then](#Whats-this-all-about)
  - [Installation](#Installation)
  - [Using the generator](#Using-the-generator)
  - [Using your package](#Using-your-generated-package)
  - [Contributing](#Contributing)
  - [Changelog](#Changelog)
  - [Security](#Security)

## What's this all about

**Packager** will quickly and easily scaffold a Laravel package, getting you up and running within a few seconds.

It will generate the necessary files such as a service provider and a composer file, it will also install your package as a local depenedency while also generating placeholder directories for migrations, translations etc.

The service provider will be configured with all the correct settings for loading and/or publishing your assets. Just uncomment what you need and you're done.

## Installation

This Package is dependend on Yeoman Generator. If you haven't installed already, install the Yeoman generator:

```bash
npm install -g yo
```

After that, install the this generator:

```bash
npm i -g generator-packager
```
  
   This will install the generator globally so yo can access it by `yo laravel-packar`.

## Using the generator

Run the following command:

```bash
yo packager
```

and follow the instructions.

## Using your generated package

Generator will Automatically install the Package Generated.

After the composer.json file has been updated, run the composer update command:

```bash
composer update
```

This will update all dependancies in you Laravel Application.

**Note**: If you update your package's composer.json file, you need to run the composer update command again to update the app's autoloader.

This is only necessary for the composer.json file. Changes in any other files in your package will be automatically updated thanks to the symlink.

## Contributing

### Credit
- Dependancies
  ```bash
  - georgechitechi/cool
  - laravel/framework
  - yeoman/generator-generator
  ```

#### All dependancies are installed Out of the Box.

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## Security

If you discover any security-related issues, please email george@flightsadmin.com instead of using the issue tracker. Security issues will be addressed promptly.