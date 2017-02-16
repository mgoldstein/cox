function toggleDiv(divId)
{
	if (document.getElementById(divId).style.display == "none") {
		document.getElementById(divId).style.display = "block";
	}
	else {
		document.getElementById(divId).style.display = "none";
	}
}

function hideRacialSubstitutionLevels() {
	document.getElementById('racial_substitution_table').style.display="none";
	var rstrows = document.getElementById('racial_substitution_table').getElementsByTagName("tr");
	for (i=0; i < rstrows.length; i++) { 
    rstrows[i].style.display="none";
	}
}

function clearall() {
total_levels=0;
ClearAllAbilityAssignments();
NegateTheBottomStuff();
NegateWizardSpecialization();
NegatePsionSpecialization();
rangercombattrack=0;
can_read=false;
psi_art=false;
check_penalty=0;
missile_attack_string_1="", finesse_attack_string_1="", grapple_attack_string_1="", handheld_attack_string_1="", unarmed_attack_string_1="", flurry_of_blows_string="", fortitude_string_1="", will_string_1="", reflex_string_1="", initiative_string_1="", missile_attack_string_2="", finesse_attack_string_2="", grapple_attack_string_2="", handheld_attack_string_2="", unarmed_attack_string_2="", fortitude_string_2="", will_string_2="", reflex_string_2="", initiative_string_2="";
no_familiar=true, bat_familiar=false, cat_familiar=false, hawk_familiar=false, lizard_familiar=false, owl_familiar=false, rat_familiar=false, raven_familiar=false, snake_familiar=false, toad_familiar=false, weasel_familiar=false, improved_familiar=false;
already_knows_simple_weapons=false, already_knows_martial_weapons=false, already_knows_light_armor=false, already_knows_medium_armor=false, already_knows_heavy_armor=false, already_knows_shields=false, already_knows_tower_shield=false;
FeatsAreLocked=false;
skill_points_spent=0;
total_fighter_feats=0, total_scout_feats=0, total_hexblade_feats=0, total_knight_feats=0, total_shifter_feats=0, total_psiwarrior_feats=0, total_cabinettrickster_feats=0, total_vadalisbeastkeeper_feats=0, high_level_rogue_count=0, total_wizard_feats=0, total_psion_feats=0;
WizardSpells0="", WizardSpells1="", WizardSpells2="", WizardSpells3="", WizardSpells4="", WizardSpells5="", WizardSpells6="", WizardSpells7="", WizardSpells8="", WizardSpells9="", DruidSpells0="", DruidSpells1="", DruidSpells2="", DruidSpells3="", DruidSpells4="", DruidSpells5="", DruidSpells6="", DruidSpells7="", DruidSpells8="", DruidSpells9="", ClericSpells0="", ClericSpells1="", ClericSpells2="", ClericSpells3="", ClericSpells4="", ClericSpells5="", ClericSpells6="", ClericSpells7="", ClericSpells8="", ClericSpells9="", AdeptSpells0="", AdeptSpells1="", AdeptSpells2="", AdeptSpells3="", AdeptSpells4="", AdeptSpells5="", ArtificerSpells1="", ArtificerSpells2="", ArtificerSpells3="", ArtificerSpells4="", ArtificerSpells5="", ArtificerSpells6="", SorcererSpells0="", SorcererSpells1="", SorcererSpells2="", SorcererSpells3="", SorcererSpells4="", SorcererSpells5="", SorcererSpells6="", SorcererSpells7="", SorcererSpells8="", SorcererSpells9="", ShamanSpells0="", ShamanSpells1="", ShamanSpells2="", ShamanSpells3="", ShamanSpells4="", ShamanSpells5="", ShamanSpells6="", ShamanSpells7="", ShamanSpells8="", ShamanSpells9="", FSSpells0="", FSSpells1="", FSSpells2="", FSSpells3="", FSSpells4="", FSSpells5="", FSSpells6="", FSSpells7="", FSSpells8="", FSSpells9="", PaladinSpells0="", PaladinSpells1="", PaladinSpells2="", PaladinSpells3="", PaladinSpells4="", HexbladeSpells0="", HexbladeSpells1="", HexbladeSpells2="", HexbladeSpells3="", HexbladeSpells4="", RangerSpells0="", RangerSpells1="", RangerSpells2="", RangerSpells3="", RangerSpells4="", BardSpells0="", BardSpells1="", BardSpells2="", BardSpells3="", BardSpells4="", BardSpells5="", BardSpells6="";
base_attack_bonus=0, base_fortitude_bonus=0, base_will_bonus=0, base_reflex_bonus=0, missile_attack=0, finesse_attack=0, grapple_attack=0, handheld_attack=0, unarmed_attack=0, fortitude_save=0, reflex_save=0, will_save=0, initiative_modifier=0, missile_attack=0, finesse_attack=0, grapple_attack=0;
z=0;
total_skill_points=0;
stringy="";
class_string="";
genderandrace_string="";
small=false, large=false;
has_uncanny_dodge=false;
total_hit_points=0, total_armor_class=10, touch_armor_class=10, flatfooted_armor_class=10, armor_string="", speed_string="", shield_string="", armor_class_string="", damage_reduction_string="", dexterity_bonus_in_this_armor=0;
document.form1.skillpointcount.value="";
document.form1.feat.value="This will monitor your feat selection.";
uncheck_feat_boxes();
NegateFeats();
document.form1.abilityfocusname.value="";
document.form1.aberrant_dragonmark_power.selectedIndex=0;
document.getElementById('aberrant_dragonmark_power').style.display="none";
document.getElementById('aberrant_dragonmark_power').disabled=true; 
has_feeble=false, has_frail=false, has_improvedtoughness=false, has_inattentive=false, has_meagerfortitude=false, has_weakwill=false, has_otherflaw1=false, has_otherflaw2=false, has_murkyeyed=false, has_noncombatant=false, has_poorreflexes=false, has_shaky=false, has_slowpoke=false, has_unreactive=false, has_vulnerable=false, monkish_improved_grapple=false, monkish_stunning_fist=false, monkish_whirling_6=false, monkish_flensing_6=false, monkish_whirling_2=false, monkish_flensing_2=false, monkish_combat_reflexes=false, monkish_deflect_arrows=false, monkish_improved_disarm=false, monkish_improved_trip=false, has_air_domain=false, has_animal_domain=false, has_chaos_domain=false, has_death_domain=false, has_destruction_domain=false, has_earth_domain=false, has_evil_domain=false, has_fire_domain=false, has_good_domain=false, has_healing_domain=false, has_knowledge_domain=false, has_law_domain=false, has_luck_domain=false, has_magic_domain=false, has_plant_domain=false, has_protection_domain=false, has_strength_domain=false, has_sun_domain=false, has_travel_domain=false, has_truth_domain=false, has_transformation_domain=false, has_trickery_domain=false, has_war_domain=false, has_water_domain=false, has_other_domain_1=false, has_other_domain_2=false, has_artifice_domain=false, has_charm_domain=false, has_commerce_domain=false, has_community_domain=false, has_deathless_domain=false, has_decay_domain=false, has_dragonbelow_domain=false, has_exorcism_domain=false, has_improvedmanifestation=0, has_feast_domain=false, has_life_domain=false, has_madness_domain=false, has_meditation_domain=false, has_necromancer_domain=false, has_passion_domain=false, has_shadow_domain=false, has_weather_domain=false, channels_energy=0;
document.form1.psionic_artificer[0].checked=false;
document.form1.psionic_artificer[1].checked=false;
document.form1.reading_barbarian[0].checked=false;
document.form1.reading_barbarian[1].checked=false;
document.form1.choose_energy[0].checked=false;
document.form1.choose_energy[1].checked=false;
UncheckDomains();
document.form1.ranger_combat_track[0].checked=false;
document.form1.ranger_combat_track[1].checked=false;
document.form1.choose_familiar[0].checked=true;
document.form1.choose_familiar[0].checked=false;
document.form1.choose_specialty[0].checked=true;
document.form1.choose_specialty[0].checked=false;
document.form1.choose_psi_specialty[0].checked=true;
document.form1.choose_psi_specialty[0].checked=false;
document.form1.forbid_abjuration.checked=false;
document.form1.forbid_conjuration.checked=false;
document.form1.forbid_enchantment.checked=false;
document.form1.forbid_evocation.checked=false;
document.form1.forbid_illusion.checked=false;
document.form1.forbid_necromancy.checked=false;
document.form1.forbid_transmutation.checked=false;
uncheck_feat_boxes();
scoutfeatentitlement=0, hexbladefeatentitlement=0, knightfeatentitlement=0, fighterfeatentitlement=0, artificerfeatentitlement=0, psiartfeatentitlement=0, extremeexplorerfeatentitlement=0, weretouchedmasterfeatentitlement=0, masterinquisitivefeatentitlement=0, dragonprophetfeatentitlement=0, psiwarriorfeatentitlement=0, genericfeatentitlement=0, wizardfeatentitlement=0, psionfeatentitlement=0;
document.form1.firststatistic.value="";
document.form1.secondstatistic.value="";
document.form1.thirdstatistic.value="";
document.form1.fourthstatistic.value="";
document.form1.fifthstatistic.value="";
document.form1.sixthstatistic.value="";
document.form1.first_comment_box.value="Roll the dice!";
if (document.form1.methods_list.selectedIndex==3) { document.form1.first_comment_box.value="Point buy.  "; RollSomeDice(); }
if (document.form1.methods_list.selectedIndex==2) { document.form1.first_comment_box.value="Elite array.  "; RollSomeDice(); }
if (document.form1.methods_list.selectedIndex==4) { document.form1.first_comment_box.value="Non-Elite array.  "; RollSomeDice(); }
if (document.form1.methods_list.selectedIndex==6) { document.form1.first_comment_box.value="Simple Entry.  "; RollSomeDice(); }
document.form1.second_comment_box.value="";
document.form1.third_comment_box.value="";
document.form1.fourth_comment_box.value="";
document.form1.fifth_comment_box.value="";
document.form1.sixth_comment_box.value="Keep working";
document.form1.about_appraise.value="";
document.form1.about_balance.value="";
document.form1.about_bluff.value="";
document.form1.about_climb.value="";
document.form1.about_concentration.value="";
document.form1.about_craft_1.value="";
document.form1.craft1name.value="";
document.form1.about_craft_2.value="";
document.form1.craft2name.value="";
document.form1.about_craft_3.value="";
document.form1.craft3name.value="";
document.form1.about_decipherscript.value="";
document.form1.about_diplomacy.value="";
document.form1.about_disabledevice.value="";
document.form1.about_disguise.value="";
document.form1.about_escapeartist.value="";
document.form1.about_forgery.value="";
document.form1.about_gatherinformation.value="";
document.form1.about_handleanimal.value="";
document.form1.about_heal.value="";
document.form1.about_hide.value="";
document.form1.about_intimidate.value="";
document.form1.about_jump.value="";
document.form1.about_knowledgearcana.value="";
document.form1.about_knowledgearchitecture.value="";
document.form1.about_knowledgedungeoneering.value="";
document.form1.about_knowledgegeography.value="";
document.form1.about_knowledgehistory.value="";
document.form1.about_knowledgelocal.value="";
document.form1.about_knowledgenature.value="";
document.form1.about_knowledgenobility.value="";
document.form1.about_knowledgereligion.value="";
document.form1.about_knowledgeplanes.value="";
document.form1.about_listen.value="";
document.form1.about_movesilently.value="";
document.form1.about_openlock.value="";
document.form1.about_perform_1.value="";
document.form1.perform1name.value="";
document.form1.about_perform_2.value="";
document.form1.perform2name.value="";
document.form1.about_perform_3.value="";
document.form1.perform3name.value="";
document.form1.about_profession.value="";
document.form1.profession1name.value="";
document.form1.about_ride.value="";
document.form1.about_search.value="";
document.form1.about_sensemotive.value="";
document.form1.about_sleightofhand.value="";
document.form1.about_speaklanguage.value="";
document.form1.about_spellcraft.value="";
document.form1.about_spot.value="";
document.form1.about_survival.value="";
document.form1.about_swim.value="";
document.form1.about_tumble.value="";
document.form1.about_usemagicdevice.value="";
document.form1.about_userope.value="";
document.form1.about_autohypnosis.value="";
document.form1.about_knowpsi.value="";
document.form1.about_psicraft.value="";
document.form1.about_usepsionicdevice.value="";
document.form1.about_otherskill1.value="";
document.form1.about_otherskill2.value="";
document.form1.about_otherskill3.value="";
NegateAllClassChoicesHereAndBelow(1);
NegateElevenClassLevels();
rayce=0;
document.form1.how_tall.selectedIndex=0;
document.form1.how_heavy.selectedIndex=0;
alignment=0, total_levels=0, gender=0;
z=0;
while (z<21) { 
	strength=0;
	wisdom=0;
	dexterity=0;
	intelligence=0;
	charisma=0;
	constitution=0;
	z++; 
}
intelligence01=0, intelligence04=0, intelligence08=0, intelligence12=0, intelligence16=0, intelligence20=0, intelligence24=0, intelligence28=0, intelligence32=0, intelligence36=0, intelligence40=0, intelligence44=0, intelligence48=0, intelligence52=0, intelligence56=0, intelligence60=0, intelligence64=0, intelligence68=0, intelligence72=0, intelligence76=0, intelligence80=0, intelligence84=0, intelligence88=0, intelligence92=0, intelligence96=0, intelligence100=0;
newHP01=0, newHP02=0, newHP03=0, newHP04=0, newHP05=0, newHP06=0, newHP07=0, newHP08=0, newHP09=0, newHP10=0, newHP11=0, newHP12=0, newHP13=0, newHP14=0, newHP15=0, newHP16=0, newHP17=0, newHP18=0, newHP19=0, newHP20=0, newHP21=0, newHP22=0, newHP23=0, newHP24=0, newHP25=0, newHP26=0, newHP27=0, newHP28=0, newHP29=0, newHP30=0, newHP31=0, newHP32=0, newHP33=0, newHP34=0, newHP35=0, newHP36=0, newHP37=0, newHP38=0, newHP39=0, newHP40=0, newHP41=0, newHP42=0, newHP43=0, newHP44=0, newHP45=0, newHP46=0, newHP47=0, newHP48=0, newHP49=0, newHP50=0, newHP51=0, newHP52=0, newHP53=0, newHP54=0, newHP55=0, newHP56=0, newHP57=0, newHP58=0, newHP59=0, newHP60=0, newHP61=0, newHP62=0, newHP63=0, newHP64=0, newHP65=0, newHP66=0, newHP67=0, newHP68=0, newHP69=0, newHP70=0, newHP71=0, newHP72=0, newHP73=0, newHP74=0, newHP75=0, newHP76=0, newHP77=0, newHP78=0, newHP79=0, newHP80=0, newHP81=0, newHP82=0, newHP83=0, newHP84=0, newHP85=0, newHP86=0, newHP87=0, newHP88=0, newHP89=0, newHP90=0, newHP91=0, newHP92=0, newHP93=0, newHP94=0, newHP95=0, newHP96=0, newHP97=0, newHP98=0, newHP99=0, newHP100=0;
class01=0, class02=0, class03=0, class04=0, class05=0, class06=0, class07=0, class08=0, class09=0, class10=0, class11=0, class12=0, class13=0, class14=0, class15=0, class16=0, class17=0, class18=0, class19=0, class20=0;
SkillPointsAreLocked=false, ClassesHaveBeenEstablished=false, CharacterTypeHasBeenEstablished=false, AbilitiesHaveBeenEstablished=false, AbilitiesAreProperlyAssigned=false, DiceHaveBeenRolled=false, AbilityIncreasesAreLocked=false, FighterFeatsEtcFrozen=false, FeatsAreLocked=false;
upitat04=0, upitat08=0, upitat12=0, upitat16=0, upitat20=0, upitat24=0, upitat28=0, upitat32=0, upitat36=0, upitat40=0, upitat44=0, upitat48=0, upitat52=0, upitat56=0, upitat60=0, upitat64=0, upitat68=0, upitat72=0, upitat76=0, upitat80=0, upitat84=0, upitat88=0, upitat92=0, upitat96=0, upitat100=0;
WipeMonkishFeats(0);
WipeDomains();
NotYourSkills();
ClearRace();
ClearGender();
ClearShifter();
ClearAlignment();
ClearTotalLevels();
hideRacialSubstitutionLevels();
NegateSkills();
NegateAllUp04();
NegateAllUp08();
NegateAllUp12();
NegateAllUp16();
NegateAllUp20();
AddUpTheClasses();
PointBuyIsEightsOrBetter();
RememberFeats();
}