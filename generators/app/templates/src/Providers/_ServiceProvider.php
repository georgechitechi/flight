<?php

namespace <%=PACKAGE_NAMESPACE%>;

use Illuminate\Support\ServiceProvider;

class <%=CLASS_NAME%>ServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     * @return void
     */
    public function boot()
    {
        /**
         * Publish Config file using the 'config' tag.
         */
        $this->publishes([
            __DIR__.'/../config/<%=PACKAGE_SLUG%>.php' => config_path('<%=PACKAGE_SLUG%>.php'),
        ], 'config');

        /**
         * Routes
         * Load the route files. A <%=PACKAGE_NAME%>.php file has already been generated.
         */
        $this->loadRoutesFrom(__DIR__.'/routes/<%=PACKAGE_NAME%>.php');

        /**
         * Translations
         * First function loads the translations.
         * Second function loads the JSON translations.
         * Third function makes the translations publishable using the 'translations' tag.
         */
        $this->loadTranslationsFrom(__DIR__.'/resources/lang', '<%=PACKAGE_SLUG%>');
        $this->loadJsonTranslationsFrom(__DIR__.'/resources/lang', '<%=PACKAGE_SLUG%>');
        $this->publishes([
            __DIR__.'/resources/lang' => resource_path('lang/vendor/<%=PACKAGE_SLUG%>'),
        ], 'translations');

        /**
         * Views
         * First function loads the views.
         * Second function makes the view publishable using the 'view' tags.
         */
        $this->loadViewsFrom(__DIR__.'/resources/views', '<%=PACKAGE_SLUG%>');
        $this->publishes([
            __DIR__.'/resources/views' => resource_path('views/vendor/<%=PACKAGE_SLUG%>'),
        ], 'views');
		
		/* Publish Layout */
        $this->publishes([
            __DIR__.'/resources/views/layouts' => resource_path('views/layouts'),
        ], 'layouts');
		
        /**
         * Commands
         * Load the commands.
         * A basic command file has already been generated in 'src\Console\Commands\<%=CLASS_NAME%>Command.php'.
         */
        if ($this->app->runningInConsole()) {
            $this->commands([
                \<%=PACKAGE_NAMESPACE%>\Console\Commands\<%=CLASS_NAME%>Command::class,
            ]);
        }

        /**
         * Public assets
         * This function makes the public assets publishable using the 'public' tag.
         */
        $this->publishes([
            __DIR__.'/public' => public_path('vendor/<%=PACKAGE_SLUG%>'),
        ], 'public');

        /**
         * Migrations
         * First function loads the migrations.
         * Second function makes the migrations publishable using the 'migrations' tags.
         */
        $this->loadMigrationsFrom(__DIR__.'/database/migrations');
        // $this->publishes([
            // __DIR__.'/database/migrations/' => database_path('migrations')
        // ], 'migrations');
    }

    /**
     * Register the application services.
     * @return void
     */
    public function register()
    {
        /**
         * Config file
         * Load the config file. If the config file is also publishable, it will merge with that file
         */
        $this->mergeConfigFrom(
            __DIR__.'/../config/<%=PACKAGE_SLUG%>.php', '<%=PACKAGE_SLUG%>'
        );
    }
}
