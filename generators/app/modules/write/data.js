const _ = require("lodash");

/**
 * Copies the composer file from the generator templates to the target dir while updating the settings
 *
 * @param  {yeoman-generator} generator The Yeoman generator instance
 */
module.exports = function(generator) {
	generator.fs.copyTpl(
		generator.templatePath("_composer.json"),
		generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name +"/composer.json"),
    {
		  VENDOR_SLUG: generator.props.vendor.slug,
		  PACKAGE_SLUG: generator.props.package.slug,
		  AUTHOR_NAME: generator.props.author.name,
		  AUTHOR_EMAIL: generator.props.author.email,
		  LICENSE: generator.props.package.license,
		  PACKAGE_NAMESPACE: _.replace(
			generator.props.package.namespace,
			/[\\]/g,
			"\\\\"
		  ),
		  PACKAGE_ALIAS: generator.props.package.alias,
		  CLASS_NAME: generator.props.package.basename
    }
  );
  
	generator.fs.copyTpl(
		generator.templatePath("src/Console/Commands/_Command.php"),
		generator.destinationPath(
		  "packages/"+ generator.props.vendor.name + "/" + generator.props.package.name +"/src/Console/Commands/"+`${generator.props.package.basename}`+"Command.php"
    ),
    {
		  PACKAGE_NAMESPACE: generator.props.package.namespace,
		  CLASS_NAME: generator.props.package.basename,
		  PACKAGE_SLUG: generator.props.package.slug
    }
  );
  
	generator.fs.copyTpl(
		generator.templatePath("src/Providers/_ServiceProvider.php"),
		generator.destinationPath(
		  "packages/"+ generator.props.vendor.name + "/" + generator.props.package.name +"/src/"+`${generator.props.package.basename}`+"ServiceProvider.php"
    ),
    {
		  PACKAGE_NAMESPACE: generator.props.package.namespace,
		  CLASS_NAME: generator.props.package.basename,
		  PACKAGE_SLUG: generator.props.package.slug,
		  PACKAGE_NAME: generator.props.package.name
    }
  );

	generator.fs.copyTpl(
		generator.templatePath("_phpunit.xml"),
		generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name +"/phpunit.xml"),
    {
		PACKAGE_NAME: generator.props.package.name
    }
  );

	generator.fs.copyTpl(
		generator.templatePath("config/_config.php"),
		generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name +"/config/" + `${generator.props.package.slug}` + ".php"),
    {
		CLASS_NAME: generator.props.package.basename
    }
  );
  
    generator.fs.copyTpl(
		generator.templatePath("_README.md"),
		generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name +"/README.md"),
    {
			PACKAGE_NAME: generator.props.package.name,
			CLASS_NAME: generator.props.package.basename
    }
  );
  
	generator.fs.copyTpl(
		generator.templatePath("routes/_web.php"),
		generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name +"/src/routes/"+ generator.props.package.name + ".php"),
    {
			PACKAGE_NAMESPACE: generator.props.package.namespace,
			CLASS_NAME: generator.props.package.basename,
			PACKAGE_SLUG: generator.props.package.slug
    }
  );
  
	generator.fs.copyTpl(
      generator.templatePath("stubs/_migration.stub"),
      generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name + "/src/database/migrations/2020_12_20_220000_create_" + generator.props.package.name + "s_table.php"),
	{
		CLASS_NAME: generator.props.package.basename,
		PACKAGE_SLUG: generator.props.package.slug
    }
    );  
	
	generator.fs.copyTpl(
		generator.templatePath("stubs/_lang.stub"),
		generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name + "/src/resources/lang/" + generator.props.package.name + ".php"),
	{
		CLASS_NAME: generator.props.package.basename,
		PACKAGE_SLUG: generator.props.package.slug
    }
    );

	generator.fs.copyTpl(
		generator.templatePath("stubs/layouts/_app.stub"),
		generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name + "/src/resources/views/layouts/app.blade.php"),
	{
		CLASS_NAME: generator.props.package.basename,
		PACKAGE_SLUG: generator.props.package.slug
    }
  );
  
	generator.fs.copyTpl(
		generator.templatePath("stubs/_controller.stub"),
		generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name + "/src/Controllers/" + generator.props.package.basename + "Controller.php"),
    {
		PACKAGE_NAMESPACE: generator.props.package.namespace,
		CLASS_NAME: generator.props.package.basename,
		PACKAGE_SLUG: generator.props.package.slug,
		PACKAGE_NAME: generator.props.package.name
    }
  );

	generator.fs.copyTpl(
		generator.templatePath("stubs/_model.stub"),
		generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name + "/src/Models/" + generator.props.package.basename + ".php"),
    {
		PACKAGE_NAMESPACE: generator.props.package.namespace,
		CLASS_NAME: generator.props.package.basename,
		PACKAGE_SLUG: generator.props.package.slug,
        PACKAGE_NAME: generator.props.package.name
    }
  );

	generator.fs.copyTpl(
		generator.templatePath("stubs/views/_create.stub"),
		generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name + "/src/resources/views/" + generator.props.package.slug + "/create.blade.php"),
    {
		PACKAGE_NAMESPACE: generator.props.package.namespace,
		CLASS_NAME: generator.props.package.basename,
		PACKAGE_SLUG: generator.props.package.slug,
        PACKAGE_NAME: generator.props.package.name
    }
  );

  generator.fs.copyTpl(
    generator.templatePath("stubs/views/_edit.stub"),
    generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name + "/src/resources/views/" + generator.props.package.slug + "/edit.blade.php"),
    {
		PACKAGE_NAMESPACE: generator.props.package.namespace,
		CLASS_NAME: generator.props.package.basename,
		PACKAGE_SLUG: generator.props.package.slug,
        PACKAGE_NAME: generator.props.package.name
    }
  );

  generator.fs.copyTpl(
    generator.templatePath("stubs/views/_form.stub"),
    generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name + "/src/resources/views/" + generator.props.package.slug + "/form.blade.php"),
    {
		PACKAGE_NAMESPACE: generator.props.package.namespace,
		CLASS_NAME: generator.props.package.basename,
		PACKAGE_SLUG: generator.props.package.slug,
        PACKAGE_NAME: generator.props.package.name
    }
  );
  
  generator.fs.copyTpl(
    generator.templatePath("stubs/views/_form-field.stub"),
    generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name + "/src/resources/views/" + generator.props.package.slug + "/form-field.blade.php"),
    {
		PACKAGE_NAMESPACE: generator.props.package.namespace,
		CLASS_NAME: generator.props.package.basename,
		PACKAGE_SLUG: generator.props.package.slug,
        PACKAGE_NAME: generator.props.package.name
    }
  );
  
  generator.fs.copyTpl(
    generator.templatePath("stubs/views/_main-index.stub"),
    generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name + "/src/resources/views/" + generator.props.package.slug + "/main-index.blade.php"),
    {
		PACKAGE_NAMESPACE: generator.props.package.namespace,
		CLASS_NAME: generator.props.package.basename,
		PACKAGE_SLUG: generator.props.package.slug,
        PACKAGE_NAME: generator.props.package.name
    }
  );  
  
	generator.fs.copyTpl(
		generator.templatePath("stubs/views/_index.stub"),
		generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name + "/src/resources/views/" + generator.props.package.slug + "/index.blade.php"),
    {
		PACKAGE_NAMESPACE: generator.props.package.namespace,
		CLASS_NAME: generator.props.package.basename,
		PACKAGE_SLUG: generator.props.package.slug,
        PACKAGE_NAME: generator.props.package.name
    }
  );
  
	generator.fs.copyTpl(
		generator.templatePath("stubs/views/_show.stub"),
		generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name + "/src/resources/views/" + generator.props.package.slug + "/show.blade.php"),
    {
		PACKAGE_NAMESPACE: generator.props.package.namespace,
		CLASS_NAME: generator.props.package.basename,
		PACKAGE_SLUG: generator.props.package.slug,
        PACKAGE_NAME: generator.props.package.name
    }
  );  

	generator.fs.copyTpl(
		generator.templatePath("stubs/views/_view-field.stub"),
		generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name + "/src/resources/views/" + generator.props.package.slug + "/view-field.blade.php"),
    {
		PACKAGE_NAMESPACE: generator.props.package.namespace,
		CLASS_NAME: generator.props.package.basename,
		PACKAGE_SLUG: generator.props.package.slug,
        PACKAGE_NAME: generator.props.package.name
    }
  );
    
	generator.fs.copy(
		generator.templatePath("stubs/_css.stub"),
		generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name + "/src/public/css/app.css")
  );
  
	generator.fs.copy(
		generator.templatePath("stubs/_js.stub"),
		generator.destinationPath("packages/"+ generator.props.vendor.name + "/" + generator.props.package.name + "/src/public/js/app.js")
  );
	
};