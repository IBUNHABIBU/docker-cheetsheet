# config valid for current version and patch releases of Capistrano
lock "~> 3.17.1"

server '143.42.8.246', :app, :web, :db, :primary => true
set :application, "car-rent-booking-api"
set :repo_url, "https://github.com/IBUNHABIBU/car-rent-booking-api"
set :branch, 'dev'
set :deploy_to, '/home/deploy/car-rent-booking-api'
set :deploy_via, :remote_cache
set :use_sudo, false 

default_run_options[:pty] = true
ssh_options[:forward_agent] = true

set :scm, :git

after "deploy", "deploy:cleanup" # keep only the last 5 releases

namespace :deploy do 
  %w[start stop restart].each do |command|
    desc "#{command} unicorn server"
    task command, roles: :app, except: {no_release: true} do
      run "/etc/init.d/unicorn_#{application} #{command}"
    end
  end

  task :setup_config, roles: :app do
    sudo "ln -nfs #{current_path}/config/nginx.conf /etc/nginx/sites-enabled/#{application}"
    sudo "ln -nfs #{current_path}/config/unicorn_init.sh /etc/init.d/unicorn_#{application}"
    run "mkdir -p #{shared_path}/config"
    put File.read("config/database.example.yml"), "#{shared_path}/config/database.yml"
    puts "Now edit the config files in #{shared_path}."
  end

    after "deploy:setup", "deploy:setup_config" 

    task :symlink_config, roles: :app do
        run "ln -nfs #{shared_path}/config/database.yml #{release_path}/config/database.yml"
    end

    after "deploy:finalize_update", "deploy:symlink_config"

    desc "Make sure local git is in sync with remote."
    task :check_revision, roles: :web do
        unless `git rev-parse HEAD` == `git rev-parse origin/dev`
            puts "WARNING: HEAD is not the same as origin/dev"
            puts "Run `git push` to sync changes."
            exit
        end
    end

    before "deploy", "deploy:check_revision" 

    

end



# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, "/var/www/my_app_name"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml", 'config/master.key'

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "tmp/webpacker", "public/system", "vendor", "storage"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure
