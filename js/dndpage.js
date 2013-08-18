var maxHealth = 100;
var currentHealth = maxHealth;
var maxMana = 50;
var currentMana = maxMana;
var maxExp = 550;
var currentExp = 200;

$(function() {
        $( "#sortable" ).sortable();
        $( "#sortable" ).disableSelection();

        $( "#healthbar" ).progressbar({
          value: 100
        });
        $( "#manabar" ).progressbar({
                  value: 100
                });
        $( "#expbar" ).progressbar({
                  value: 100
                });

  });

function updateHealth(damage) {
    var bar = $( "#healthbar" );
    var modifier = document.getElementById("changer").value;
    var newHealth;
    if(damage) {
       newHealth = currentHealth - parseInt(modifier);
    } else {
       newHealth = currentHealth + parseInt(modifier);
    }
    var label = $( "#health" );

    if(newHealth > maxHealth) {
        newHealth = maxHealth;
    }

    bar.progressbar("option", "value", (newHealth/maxHealth) * 100);

    label.text(newHealth + "/" + maxHealth);

    currentHealth = newHealth;
}

function updateMana(damage) {
    var bar = $( "#manabar" );
    var modifier = document.getElementById("changer").value;
    var newMana;
    if(damage) {
       newMana = currentMana - parseInt(modifier);
    } else {
       newMana = currentMana + parseInt(modifier);
    }
    var label = $( "#mana" );

    if(newMana > maxMana) {
        newMana = maxMana;
    }

    bar.progressbar("option", "value", (newMana/maxMana) * 100);

    label.text(newMana + "/" + maxMana);

    currentMana = newMana;
}

function updateExp(damage) {
    var bar = $( "#expbar" );
    var modifier = document.getElementById("changer").value;
    var newExp;
    if(damage) {
       newExp = currentExp - parseInt(modifier);
    } else {
       newExp = currentExp + parseInt(modifier);
    }
    var label = $( "#exp" );

    if(newExp > maxExp) {
        newExp = maxExp;
    }

    bar.progressbar("option", "value", (newExp/maxExp) * 100);

    label.text(newExp + "/" + maxExp);

    currentExp = newExp;
}
