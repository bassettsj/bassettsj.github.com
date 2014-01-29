---
layout: post
category : drush
tags : [drupal, drush, git, mamp, developer tools]
title: Drush Resources
tagline: Site Deployment and Development: Drush, MAMP and Git
---

Setting up a local Drupal development environment on your Mac and how to use Drush to manage and sync sites.

## Articles 
* [Using drush to synchronize and deploy sites](https://drupal.org/node/670460)
* [A Drupal Development Environment on OS X with MAMP Pro, Eclipse, xDebug, and Drush](http://brianfisher.name/content/drupal-development-environment-os-x-mamp-pro-eclipse-xdebug-and-drush)
* [getting drush to work on a MAMP setup](https://drupal.org/node/601604)
* [Drush Official Site](http://drush.ws/)

##Setting up the local environment on a Mac.##
* Download and install [MAMP](http://www.mamp.info/en/index.html)
	* I like to configure my development enviroment to point to the `~/Sites/` directory to serve the sites.
* Installing git version control
	* Download and install the latest version of [git](http://git-scm.com/).
	* Follow the instructions.
	* If you’re looking for some enticing reading, check out [Pro Git](http://git-scm.com/book) for detailed infomation about git version control.
* Installing Drush
	* Please read the following Administration Guide from Drupal.org for the most up to date information on installing drush:
		* [Specific instructions for installing Drush on different platforms](https://drupal.org/node/1791676)
	* I found the following lines the easiest to set up drush to work with MAMP, not MAMP Pro, The current version of MAMP may require some troubleshooting to get Drush to
work correctly. Known issues include:
		* Default use of php5.3.6 instead of php5.2.17 causes errors upon update, most commonly "Cannot redeclare class" errors. To solve, change the version of PHP in the MAMP preferences panel or add a line in your .bash_profile to tell Drush to use the right version of PHP `export DRUSH_PHP="/Applications/MAMP/bin/php/php5.2.17/bin/php"`.
		* Inability to connect to localhost MySQL via socket. Causes errors like "Error: PDO::__construct(): [2002] No such file or directory (trying  
to connect via unix:///var/mysql/mysql.sock)". To solve, from within Terminal
run the following commands:
			* `sudo mkdir /var/mysql`
			* `sudo ln -s /Applications/MAMP/tmp/mysql/mysql.sock /var/mysql/mysql.sock`
		* Please read the following instructions if you have MAMP Pro:
> ##MAMP Pro
> [Original Article](http://brianfisher.name/content/drupal-development-environment-os-x-mamp-pro-eclipse-xdebug-and-drush)*
> 
> These instructions are somewhat specific to MAMP PRO 2.1.1
> 
> [Download](http://www.mamp.info/en/downloads/index.html), install, and launch
> MAMP Pro. Under the PHP tab, select php 5.3.x from version pulldown. Click
> "Apply". Click "Start".
> 
> Add the MAMP executables to your path.
> 
    > 
    > chmod +x /Applications/MAMP/bin/php/php5.3.14/bin/*
    > echo "export PATH=/Applications/MAMP/bin/php/php5.3.14/bin:/Applications/MAMP/Library/bin:\$PATH" >> ~/.profile
    > . ~/.profile
> 
> Add a symlink to the MAMP Mysql socket to allow drush to connect.
> 
    > 
    > sudo mkdir /var/mysql
    > sudo ln -s /Applications/MAMP/tmp/mysql/mysql.sock /var/mysql/mysql.sock
> ## Performace
> 
> ### MYSQL
> 
> You may get "MySql server has gone away" errors. To fix, in MAMP, edit the
> mysql configuration by going to file->edit template->mysql. Change
> _max_allowed_packet_ to
> 
    > 
    > max_allowed_packet =  16M
> 
> ### PHP
> 
> Increase both the MAMP PHP memory limit. In MAMP, edit the php configuration
> 
> file->edit template->php->php5.3
> 
> change _memory_limit_ to
> 
    > 
    > memory_limit =  256M
> 
> Increase the CLI PHP memory limit. To figure out where your CLI php.ini file
> is, use
> 
    > 
    > which php
    > 
    > php -i | grep  php.ini
> 
> change _memory_limit_ to
> 
    > 
    > memory_limit =  -1
## Cloning production site to your local environment. ##
* Clone the Git repository.
	* Open Terminal
	* Use git to clone the repository for the project you’re working on from our [Bitbucket Account](https://bitbucket.org/nu_lts)
		* eg `git clone git@bitbucket.org:nu_lts/dmc.git ~/sites/dmc.neu.edu/` _clone from remote to this directory_
	* Note that this will only bring down the code that is being tracked by the git repository. It will not bring down any files or directories not tracked by Git.
* Setting Up Site Aliases
	* Go to your root apache htdocs folder, in my case `cd ~/Sites`.
	* Set up a file structure such as:
		* `~/Sites/library.neu.edu/` to act as the local root for your Drupal directory.
			* this would be accessible from [localhost:8888/library.neu.edu/](localhost:8888/library.neu.edu/)
	* Setting up the Drush Aliases for your projects
		* Location: I have used the following location by using: `cp /path/to/drush/examples/example.aliases.drushrc.php ~/.drush/aliases.drushrc.php` to move the example file with documentation to my home directory that drush will look at to find aliases.
			*  In any path set in $options['alias-path'] in drushrc.php, or (equivalently) any path passed in via --alias-path=...  on the command line.
			* In one of the default locations:
				* /etc/drush
				* $HOME/.drush
				* The sites/all/drush folder for the current Drupal site
			* Inside the sites folder of any bootstrapped Drupal site, or any local Drupal site indicated by an alias used as a parameter to a command.

Edit the `aliases.drushrc.php` file by configuring the production, staging and local environment you would like to work with eg:
	
	$aliases['dmc.local'] = array(
	'uri' => 'localhost:8888/dmc.neu.edu',
	'root' => '/Users/steven/Sites/dmc.neu.edu', // This doesn't work with ~/Sites/dev.local
	'db_url' => 'mysql://root:root@localhost:8889/dmc',
	'path-aliases' => array(
	  '%files' => 'sites/defualt/files',
	  '%dump' => '/Users/steven/tmp/drush/sql-sync-dev-local.sql', // Arbitrary location for temp files
	  ),
	);
	$aliases['dmc.prod'] = array(
	'uri' => 'defualt',
	'root' => '/var/www/html',
	'databases' =>
	  array (
	   'default' =>
	   array (
	   'default' =>
	   array (
	   'database' => 'dmc',
	   'username' => 'dmc1',
	   'password' => ‘****’,
	   'host' => 'localhost',
	   'port' => '',
	   'driver' => 'mysql',
	   'prefix' => '',
	   ),
	   ),
	  ),
	'remote-user' => 'sbassett',
	'remote-host' => '155.33.22.226',
	'path-aliases' => array(
	  '%drush' => '/usr/local/share/drush',
	  '%site' => 'sites/default',
	  '%files' => 'sites/defualt/files',
	  '%dump' => 'tmp', // Arbitrary location for temp files
	  ),
	);

##Finding the site information for the aliases: Tip from [Using drush to synchronize and deploy sites](https://drupal.org/node/670460)##
Creating the site-alias config array is tedious by hand. If you
have a working site. Change into the site dir of a working site and run `drush site-alias --with-db --show-passwords --with-optional @self`
I often go `drush site-alias --with-db --show-password --with-optional @self >
/etc/drush/mysqit.alias.drushrc.php`
and then **importantly** edit the resulting new files and A: add a `<?php`
tag to the top! B: relabel it from @self to your preferred nickname - which
must match the filename you used. Those extra connection details are required for remote aliases. If you want, you can also split out the component parts of an alias and use
inheritance to construct the peer alias. For example:
	<?php
	$aliases['mystagingserver'] = array (
	'remote-host' => 'mystagingserver.myisp.com',
	'remote-user' => 'publisher',
	);
	$aliases['peer'] = array (
		'parent' => '@mystagingserver',
  		'uri' => 'demosite.staging.remote',
  		'root' => '/var/www/vhosts/staging/httpdocs’,
	);
	?>
###SSH Key Pairs###
**Required for Drush to work with remote servers**
####Check for ssh keys on your computer
Go to your .ssh directory: `$ cd ~/.ssh`
Check for keys: 
	$ ls
	id_rsa		id_rsa.pub
If there are no keys like that above try creating the keys using the directions from github:

	$ ssh-keygen -t rsa -C "your_email@youremail.com"
	# Creates a new ssh key using the provided email
	# Generating public/private rsa key pair.
	# Enter file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]

Do not enter a passphrase:
	Enter passphrase (empty for no passphrase): [Press enter]
	Enter same passphrase again: [Press enter]

Should return:
	Your identification has been saved in /Users/you/.ssh/id_rsa.
	Your public key has been saved in /Users/you/.ssh/id_rsa.pub.
	The key fingerprint is:
	01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db your_email@youremail.com
Make sure to create the `touch ~/.ssh/authorized_keys` file. Try to create the permissions to be like the following for your environment:
	$ cd ~/.ssh
	$ ls -al
	drwx------ 2 user user 4096 Oct 10 12:31 .
	drwx------ 3 user user 4096 Oct 10 12:51 ..
	-rw------- 1 user user  808 Oct 10 12:50 authorized_keys
	-rw------- 1 user user 1675 Oct 10 12:31 identity
	-rw------- 1 user user 1675 Oct 10 12:16 id_rsa
	-rw-r--r-- 1 user user  398 Oct 10 12:16 id_rsa.pub
SSH into the remote server:
	$ ssh user@example.neu.edu
Create a keypair for the remote server using the same method above.
**(Don’t forget to check the permissions)**
When you have completed the steps on both your local and remote machines, then you can add your key to the remote server. From your **local terminal**:
	$ login=username@hostname
	$ ssh $login "echo '`cat ~/.ssh/id_rsa.pub`' >> ~/.ssh/authorized_keys"

To debug what might be happening you can run:
	$ ssh -v user@server.edu
***Need more assistance making a bootstrap way of creating key pairs.***

##Using Drush commands on remote servers
To use drush commands on a remote server you can simply use the alias for. For example I can look and see the basic site status for the DMC website. 
	$ drush @dmc.prod status
	 Site URI                      :  defualt                     
	 Database driver               :  mysql                       
	 Database hostname             :  localhost                   
	 Database username             :  dmc1                        
	 Database name                 :  dmc                         
	 Database                      :  Connected                   
	 Drupal bootstrap              :  Successful                  
	 Drupal user                   :  Anonymous                   
	 Default theme                 :  dmc                         
	 Administration theme          :  seven                       
	 PHP configuration             :  /etc/php.ini                
	 Drush version                 :  5.6                         
	 Drush configuration           :                              
	 Drupal root                   :  /var/www/html               
	 Site path                     :  sites/default               
	 File directory path           :  sites/default/files         
	 Private file directory path   :  sites/default/files/private 
	 temp                          :  tmp                         
	 Drupal version                :  7.15                        
## Using rsync to fetch files from the remote server.
Go fetch the files from our production server to local server:
	drush rsync @dmc.prod:%files/ @dmc.local:%files/
## Using drush to run a site install
Before running the command please make sure to look at `drush site-install —help` for instructions.
To install the local site into mamp you can run the following command:

	$ drush @dmc.local use
	$ drush si
If the aliases are configured correctly, you can go the the local url eg localhost:8888/dmc.neu.edu/ and it should install a basic site. Nothing special.
## Using drush to sync the databases
*Note: you will probably want to clear the cache on both sites before the transfer* `$ drush cc all`.
Use the drush `sql-sync` command to send from source to target. For example to create your local enviromnet, you will want to pull down the sql database using: `$ drush sql-sync @dmc.prod @dmc.local`
## Notes for trouble shooting White-Screen-Of-Death (WSOD)
* Try turning off clean urls: 

		$ drush vset --exact clean_url 0
		clean_url was set to 1.                                                                  [success]		
* Clear the cache `$ drush cc all`
* Look at the settings.php file in the sites/default/ directory
* Look at the .htaccess file
* Refer to the php.ini files to make sure that MAMP is configured to give enough memory for both drush and drupal to run.
* Check your mysql and php error logs, with MAMP they are located:
	* /Applications/MAMP/logs/




