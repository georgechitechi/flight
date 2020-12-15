<?php

namespace <%=PACKAGE_NAMESPACE%>\Console\Commands;

use Illuminate\Console\Command;

class <%=CLASS_NAME%>Command extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = '<%=PACKAGE_SLUG%>:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install <%=CLASS_NAME%> Package and publish Resources';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this -> info('You Command is set up Correctly and ran Successfully');
    }
}
