var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: false}));

 var wikipedia = require("wikipedia-js");


app.post("/message", function (request, response) {
  //console.log(request.body);
  //console.log(request.body.Body);


  //var arrBody = request.body.Body.split(' ');
  //console.log(arrBody);

  var query = request.body.Body;

  var reply;

  var options = {query: query, format: "html", summaryOnly: true};
  wikipedia.searchArticle(options, function(err, htmlWikiText){
    if(err){
      console.log("An error occurred[query=%s, error=%s]", query, err);
      return;
    }
    //console.log("Query successful[query=%s, json-formatted-wiki-text=%s]", query, htmlWikiText);
    reply = htmlWikiText;
    console.log(reply);
    /*You should see something along the lines of:
      <p><strong>Napoleon Bonaparte</strong> (French: Napoléon Bonaparte [napoleɔ̃ bɔnɑpaʁt], Italian: Napoleone Buonaparte; 15 August 1769&nbsp;– 5 May 1821) was a French military and political leader who rose to prominence during the latter stages of the <a href=http://en.wikipedia.org/French_Revolution">French Revolution</a> and its associated <a href=http://en.wikipedia.org/French_Revolutionary_Wars">wars</a> in Europe.</p>
      <p>As <strong>Napoleon I</strong>, he was <a href=http://en.wikipedia.org/Emperor_of_the_French">Emperor of the French</a> from 1804 to 1815. His legal reform, the <a href=http://en.wikipedia.org/Napoleonic_Code">Napoleonic Code</a>, has been a major influence on many <a href=http://en.wikipedia.org/Civil_law_(legal_system)">civil law</a> jurisdictions worldwide, but he is best remembered for his role in the wars led against France by a series of coalitions, the so-called <a href=http://en.wikipedia.org/Napoleonic_Wars">Napoleonic Wars</a>. He established hegemony over most of continental Europe and sought to spread the ideals of the French Revolution, while consolidating an <a href=http://en.wikipedia.org/First_French_Empire">imperial monarchy</a> which restored aspects of the deposed <em><a href=http://en.wikipedia.org/Ancien_Régime">Ancien Régime</a>.</em> Due to his success in these wars, often against numerically superior enemies, he is generally regarded as one of the greatest military commanders of all time, and his campaigns are studied at military academies worldwide.(ref: Schom 1998)</p>
      <p>Napoleon was born at <a href=http://en.wikipedia.org/Ajaccio">Ajaccio</a> in <a href=http://en.wikipedia.org/Corsica">Corsica</a> in a family of <a href=http://en.wikipedia.org/Nobility_of_Italy">noble Italian</a> ancestry which had settled Corsica in the 16th century. He trained as an artillery officer in mainland France. He rose to prominence under the <a href=http://en.wikipedia.org/French_First_Republic">French First Republic</a> and led successful campaigns against the <a href=http://en.wikipedia.org/First_Coalition">First</a> and <a href=http://en.wikipedia.org/War_of_the_Second_Coalition">Second</a> Coalitions arrayed against France. He led a successful invasion of the Italian peninsula.</p>
      <p>In 1799, he staged a <em><a href=http://en.wikipedia.org/18_Brumaire">coup d</em>état</a> and installed himself as <a href=http://en.wikipedia.org/First_Consul">First Consul</a>; five years later the French Senate proclaimed him emperor, following a <a href=http://en.wikipedia.org/plebiscite">plebiscite</a> in his favour. In the first decade of the 19th century, the <a href=http://en.wikipedia.org/First_French_Empire">French Empire</a> under Napoleon engaged in a series of conflicts—the Napoleonic Wars—that involved every major European power.(ref: Schom 1998) After a streak of victories, France secured a dominant position in continental Europe, and Napoleon maintained the French <a href=http://en.wikipedia.org/sphere_of_influence">sphere of influence</a> through the formation of extensive alliances and the appointment of friends and family members to rule other European countries as French <a href=http://en.wikipedia.org/client_state">client state</a>s.</p>
      <p>The <a href=http://en.wikipedia.org/Peninsular_War">Peninsular War</a> and 1812 <a href=http://en.wikipedia.org/French_invasion_of_Russia">French invasion of Russia</a> marked turning points in Napoleons fortunes. His <a href=http://en.wikipedia.org/Grande_Armée">Grande Armée</a> was badly damaged in the campaign and never fully recovered. In 1813, the <a href=http://en.wikipedia.org/Sixth_Coalition">Sixth Coalition</a> defeated his forces <a href=http://en.wikipedia.org/Battle_of_Leipzig">at Leipzig</a>; the following year the Coalition invaded France, forced Napoleon to abdicate and exiled him to the island of <a href=http://en.wikipedia.org/Elba">Elba</a>. Less than a year later, he escaped Elba and returned to power, but was defeated at the <a href=http://en.wikipedia.org/Battle_of_Waterloo">Battle of Waterloo</a> in June 1815. Napoleon spent the last six years of his life in confinement by the British on the island of <a href=http://en.wikipedia.org/Saint_Helena">Saint Helena</a>. An autopsy concluded he died of <a href=http://en.wikipedia.org/stomach_cancer">stomach cancer</a>, but there has been some debate about the cause of his death, as some scholars have speculated that he was a victim of <a href=http://en.wikipedia.org/arsenic_poisoning">arsenic poisoning</a>.</p>
    */
    }
  );
  var str1 = "<Response><Message>";
  str1 = str1.concat(reply);
  str1 = str1.concat("</Message></Response>");
  console.log(str1);
  response.send(str1);
});

/*
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
*/
var listener = app.listen(1337, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
