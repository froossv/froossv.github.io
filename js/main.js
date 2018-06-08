jQuery(function($, undefined) {
 $('#term_demo').terminal(function(command) {

   if (command == 'social'){
     this.echo("Email Me : srivats64@gmail.com \n")
     this.echo("Github Repo : https://github.com/froossv \n")
     this.echo("Instagram : https://instagram.com/vathzenmode \n")
     this.echo("Blog : https://themaraudersmapforlife.wordpress.com")
   }

   if (command == 'edu'){
     this.echo("School : Kendriya Vidyalaya Ashok Nagar\n")
     this.echo("College : SASTRA Deemed to be University\n")
   }

   else {
     if (command !== '') {
       try {
         var result = window.eval(command);
         if (result !== undefined) {
           this.echo(new String(result));
         }
       } catch(e) {
         this.error(new String(e));
       }
     } else {
       this.echo('');
     }
   }


 }, {
 greetings: '',
 name: 'froossv.github.io',
 prompt: 'vathsanbash>$',
 color: 'green'
 });
});
