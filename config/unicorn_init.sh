set -e

TIMEOUT = ${ TIMEOUT - 60 }
APP_ROOT = / var / www / myapp
PID = $ { APP_ROOT } / tmp / pids / unicorn.pid
CMD = "cd $ { APP_ROOT } && bundle exec unicorn -D -c config/unicorn.rb -E production" # -D daemonize the server
set -u # exit if a variable is uninitialized

old_pid = " $ { PID } .oldbin"
sig() {
  test -s " $ { PID } " && kill -s " $ { 1 } " " $ { PID } "
}

oldsig() {
  test -s " $ { old_pid } " && kill -s " $ { 1 } " " $ { old_pid } "
}


