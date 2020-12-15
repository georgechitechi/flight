"use strict";

const Generator = require("yeoman-generator");
const chalk = require("chalk");
const _ = require("lodash");
const username = require("username");

const dataWriter = require("./modules/write/data");
const prompts = require("./modules/prompts");

module.exports = class extends Generator {
  initializing() {
    this.log(`Welcome to the ${chalk.green('Laravel Package Scaffolder!')}`);
    this.log(chalk.bgRed(`Before starting, make sure you are in the root of your Laravel Application!`));
    this.props = {};
  }
  
  /**
   * Prompt for the package settings, and set the generator properties
   * for the scaffolding values.
   */
  prompting() {
	  
	  
	  
    this.log(chalk.green("Fetching Your GitHub info, please wait..."));
    
    return this.user.github.username().then(
      vendor => {
        // set the vendor name here so the answers prompts can use it
        this.props.vendor = {
          name: vendor
        };
      },
      error => {
        this.props.vendor = {
          name: username.sync()
        };
      }
    ).finally(() => {
      return this.prompt(prompts(this)).then(props => {
        _.merge(this.props, props);
          
        // set the rest of the properties based on the answers
        this.props.vendor.slug = _.kebabCase(this.props.vendor.name);
        this.props.package.slug = _.kebabCase(this.props.package.name);
        this.props.package.alias = this.props.package.basename;
      });
    });
  }
      
  // default() {}
  
  /**
   * Scaffold the various files and directories
   */
  writing() {
    dataWriter(this);
  }
       
  install() {
	this.log("");
	this.log(chalk.blue("Package generated", chalk.green("Successfully")));
	this.log("");
	this.log(chalk.blue("Adding dependancies, please wait..."));
	this.log("");
	this.spawnCommandSync('composer', ['require', 'georgechitechi/cool', '--dev']);
	this.log("");
	this.log(chalk.blue("Dependancies Added Successfully"));
	this.log("");
	this.log(chalk.green("Installing your Package"));
	this.log(chalk.green("Updating Composer.json"));
	this.log(chalk.green("Adding require ", chalk.green( this.props.vendor.slug + "/" + this.props.package.slug)));
	this.log("");
	this.spawnCommandSync('php', ['artisan', 'cool:enable', this.props.vendor.slug, this.props.package.slug]);
	this.log(chalk.green("Package Installed", chalk.green("Successfully")));	 
  }
};
    