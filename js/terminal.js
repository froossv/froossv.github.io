jQuery(function($, undefined){
    $('#term_demo').terminal(function(command){
        if (command == 'social'){
            this.echo("Email : srivats64@gmail.com \n")
            this.echo("Github Repo : https://github.com/froossv \n")
            this.echo("Instagram : https://instagram.com/vathzenmode \n")
            this.echo("Blog : https://themaraudersmapforlife.wordpress.com")
        }

        if (command == 'edu'){
            this.echo("School : Kendriya Vidyalaya Ashok Nagar\n")
            this.echo("College : SASTRA Deemed to be University\n")
        }

        if (command == 'help'){
            this.echo("Type Commands like social,info,works,blog etc. For Complete List refer Readme.md. \n")
        }

        if(command == 'goto blog'){
            this.echo("Opening in New Tab...")
            window.open('https://themaraudersmapforlife.wordpress.com','_blank')
        }

        if(command == 'info'){
            this.echo("Hello User! Im Srivathsan studying B.Tech Information and Communication in SASTRA University, \n")
            this.echo("Thanjavur,India. Highly passionate about Cryptography and Mathematics")
        }

        else {
            if (command !== '') {
                try {
                    var result = window.eval(command);
                    if (result !== undefined) {
                        this.echo(new String(result));
                    }
                }catch(e){
                    this.error(new String(e));
                }
            }
            else{
                this.echo('');
            }
        }

    },
    {
        greetings: '',
        name: 'froossv.github.io',
        prompt: 'guest@froossv:~$ ',
        color: 'green'
    });
});
