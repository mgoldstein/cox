function startup() 
{ 
has_chaego01=false;
has_chaego03=false;
has_chaego05=false;
has_charog01=false;
has_charog03=false;
has_charog08=false;
has_chawiz01=false;
has_chawiz05=false;
has_chawiz10=false;
has_kalmon01=false;
has_kalmon02=false;
has_kalmon07=false;
has_kalsou01=false;
has_kalsou03=false;
has_kalsou06=false;
has_kaltel01=false;
has_kaltel03=false;
has_kaltel05=false;
has_shidru01=false;
has_shidru04=false;
has_shidru05=false;
has_shiran01=false;
has_shiran04=false;
has_shiran09=false;
has_shiwil01=false;
has_shiwil02=false;
has_shiwil06=false;
has_warart01=false;
has_warart04=false;
has_warart05=false;
has_warfig01=false;
has_warfig02=false;
has_warfig04=false;
has_warpal01=false;
has_warpal02=false;
has_warpal03=false;

CharacterTypeHasBeenEstablished=false;
racial_substitution_boxes();
NegateRacialSubstitutionArrows();
npcother_class_name="NPC-Other Class";
document.form1.choose_npcother_class[0].checked=true;
document.form1.choose_npcother_class[0].checked=false;
dragonmark=0;
ShowMyDragonmark(); 
document.form1.dragonmarkhouse[0].checked=true;
document.form1.hair_color[0].checked=true; 
document.form1.hair_color[0].checked=false;
document.form1.skin_color[0].checked=true; 
document.form1.skin_color[0].checked=false;
document.form1.eye_color[0].checked=true; 
document.form1.eye_color[0].checked=false;
document.form1.hair_type[0].checked=true; 
document.form1.hair_type[0].checked=false;
document.form1.beard_type[0].checked=true; 
document.form1.beard_type[0].checked=false;
prestige_class_name="Prestige Class";
document.form1.prestige_name.value="Prestige Class";
sorcerer_spellcaster_name="Sorcerer";
paladin_spellcaster_name="Paladin";
incarnate_levels=0;
soulborn_levels=0;
totemist_levels=0;
prestige_incarnate_levels=0;
prestige_soulborn_levels=0;
prestige_totemist_levels=0;
wizard_specialty_name="Wizard";
AnimalCompanion();
eberronprestigeclassnumber=60;
FigureClassSkillsAndTotalSkillPoints();
document.form1.moreAbout.value="";
document.form1.additionalEquipment.value="";
npcother_class_name="NPC-Other Class";
lycanthrope_hit_points=0;
lycanthrope_hit_dice=0;
inherited_template_count=0;
undead_template_count=0;
lycanthrope_template_count=0;
NegateTemplates();
NegateRangerFoes();
 if (document.form1.other_flaw_1_name.value=="") { document.form1.other_flaw_1_name.value="Other Flaw 1"; }
 if (document.form1.other_flaw_2_name.value=="") { document.form1.other_flaw_2_name.value="Other Flaw 2"; }
 if (document.form1.other_feat_1_name.value=="") { document.form1.other_feat_1_name.value="Other Feat 1"; }
 if (document.form1.other_feat_2_name.value=="") { document.form1.other_feat_2_name.value="Other Feat 2"; }
 if (document.form1.other_feat_3_name.value=="") { document.form1.other_feat_3_name.value="Other Feat 3"; }
 if (document.form1.other_feat_4_name.value=="") { document.form1.other_feat_4_name.value="Other Feat 4"; }
 if (document.form1.other_feat_5_name.value=="") { document.form1.other_feat_5_name.value="Other Feat 5"; }
 if (document.form1.other_feat_6_name.value=="") { document.form1.other_feat_6_name.value="Other Feat 6"; }
 if (document.form1.other_feat_7_name.value=="") { document.form1.other_feat_7_name.value="Other Feat 7"; }
 if (document.form1.other_feat_8_name.value=="") { document.form1.other_feat_8_name.value="Other Feat 8"; }
 if (document.form1.other_feat_9_name.value=="") { document.form1.other_feat_9_name.value="Other Feat 9"; }
 if (document.form1.other_feat_10_name.value=="") { document.form1.other_feat_10_name.value="Other Feat 10"; }
 if (document.form1.other_language_1_name.value=="") { document.form1.other_language_1_name.value="Other Language 1"; }
 if (document.form1.other_language_2_name.value=="") { document.form1.other_language_2_name.value="Other Language 2"; }
 if (document.form1.other_language_3_name.value=="") { document.form1.other_language_3_name.value="Other Language 3"; }
 if (document.form1.other_language_4_name.value=="") { document.form1.other_language_4_name.value="Other Language 4"; }
 if (document.form1.other_language_5_name.value=="") { document.form1.other_language_5_name.value="Other Language 5"; }
 if (document.form1.other_language_6_name.value=="") { document.form1.other_language_6_name.value="Other Language 6"; }
 if (document.form1.other_domain_name_1.value=="") { document.form1.other_domain_name_1.value="Other_1"; }
 if (document.form1.other_domain_name_2.value=="") { document.form1.other_domain_name_2.value="Other_2"; }
 if (document.form1.otherrace_name.value=="") { document.form1.otherrace_name.value="Other Race"; }
 if (document.form1.otherskill1_name.value=="") { document.form1.otherskill1_name.value="Other Skill 1"; }
 if (document.form1.otherskill2_name.value=="") { document.form1.otherskill2_name.value="Other Skill 2"; }
 if (document.form1.otherskill3_name.value=="") { document.form1.otherskill3_name.value="Other Skill 3"; }
NegateLanguageArrows();
prestige_psion_power_levels=0;
prestige_psiwarrior_power_levels=0;
prestige_wilder_power_levels=0;
prestige_any_spell_levels=0;
prestige_bard_spell_levels=0;
prestige_cleric_spell_levels=0;
prestige_druid_spell_levels=0;
prestige_paladin_spell_levels=0;
prestige_ranger_spell_levels=0;
prestige_sorcerer_spell_levels=0;
prestige_wizard_spell_levels=0;
prestige_artificer_spell_levels=0;
document.form1.prestige_name.value="Prestige Class";
prestige_class_name="Prestige Class";
eberronprestigeclassnumber=0;
document.form1.bigmap.src="images/breland.gif";
document.form1.house_arms.src="images/house_nobody.jpg";
document.form1.my_dragonmark.src="images/mark_of_no_house.jpg";
npcother_class_name="NPC-Other Class";
document.form1.want_another_character.src="images/not_another_character.jpg";
my_charactger_is_done=false;
sorcerous_monster_levels=0;
document.form1.title_list.length=0;
document.form1.title_list.options[0]=new Option("--------------------");
prestige_bonus_feat_entitlement=0;
prestige_armor_entitlement=0;
barbarian_gestalt=false;
artificer_gestalt=false;
bard_gestalt=false;
cleric_gestalt=false;
druid_gestalt=false;
fighter_gestalt=false;
monk_gestalt=false;
paladin_gestalt=false;
ranger_gestalt=false;
rogue_gestalt=false;
sorcerer_gestalt=false;
wizard_gestalt=false;
psion_gestalt=false;
region_of_origin=5;
document.form1.regionoforigin[4].checked=true;
dragonmark=0;
document.form1.abrasive_trait.checked=false;
document.form1.absentminded_trait.checked=false;
document.form1.aggressive_trait.checked=false;
document.form1.brawler_trait.checked=false;
document.form1.cautious_trait.checked=false;
document.form1.detached_trait.checked=false;
document.form1.dishonest_trait.checked=false;
document.form1.easygoing_trait.checked=false;
document.form1.farsighted_trait.checked=false;
document.form1.focused_trait.checked=false;
document.form1.hardy_trait.checked=false;
document.form1.hardofhearing_trait.checked=false;
document.form1.honest_trait.checked=false;
document.form1.musclebound_trait.checked=false;
document.form1.nearsighted_trait.checked=false;
document.form1.nightsighted_trait.checked=false;
document.form1.passionate_trait.checked=false;
document.form1.plucky_trait.checked=false;
document.form1.polite_trait.checked=false;
document.form1.quick_trait.checked=false;
document.form1.reckless_trait.checked=false;
document.form1.relentless_trait.checked=false;
document.form1.saddleborn_trait.checked=false;
document.form1.skinny_trait.checked=false;
document.form1.slippery_trait.checked=false;
document.form1.slow_trait.checked=false;
document.form1.stout_trait.checked=false;
document.form1.suspicious_trait.checked=false;
document.form1.torpid_trait.checked=false;
document.form1.uncivilized_trait.checked=false;
document.form1.fourth_comment_box.value="";
document.form1.fifth_comment_box.value="";
document.form1.sixth_comment_box.value="";
document.form1.feat.value="";
wt=0;
NegateNPCOtherClass();
document.form1.appraise_ics.checked=false;
document.form1.balance_ics.checked=false;
document.form1.bluff_ics.checked=false;
document.form1.climb_ics.checked=false;
document.form1.concentration_ics.checked=false;
document.form1.craft_1_ics.checked=false;
document.form1.craft_2_ics.checked=false;
document.form1.craft_3_ics.checked=false;
document.form1.decipherscript_ics.checked=false;
document.form1.diplomacy_ics.checked=false;
document.form1.disabledevice_ics.checked=false;
document.form1.disguise_ics.checked=false;
document.form1.escapeartist_ics.checked=false;
document.form1.forgery_ics.checked=false;
document.form1.gatherinformation_ics.checked=false;
document.form1.handleanimal_ics.checked=false;
document.form1.heal_ics.checked=false;
document.form1.hide_ics.checked=false;
document.form1.intimidate_ics.checked=false;
document.form1.jump_ics.checked=false;
document.form1.knowledgearcana_ics.checked=false;
document.form1.knowledgearchitecture_ics.checked=false;
document.form1.knowledgedungeoneering_ics.checked=false;
document.form1.knowledgegeography_ics.checked=false;
document.form1.knowledgehistory_ics.checked=false;
document.form1.knowledgelocal_ics.checked=false;
document.form1.knowledgenobility_ics.checked=false;
document.form1.knowledgereligion_ics.checked=false;
document.form1.knowledgeplanes_ics.checked=false;
document.form1.listen_ics.checked=false;
document.form1.movesilently_ics.checked=false;
document.form1.openlock_ics.checked=false;
document.form1.perform_1_ics.checked=false;
document.form1.perform_2_ics.checked=false;
document.form1.perform_3_ics.checked=false;
document.form1.profession_ics.checked=false;
document.form1.ride_ics.checked=false;
document.form1.search_ics.checked=false;
document.form1.sensemotive_ics.checked=false;
document.form1.sleightofhand_ics.checked=false;
document.form1.speaklanguage_ics.checked=false;
document.form1.spellcraft_ics.checked=false;
document.form1.spot_ics.checked=false;
document.form1.survival_ics.checked=false;
document.form1.swim_ics.checked=false;
document.form1.tumble_ics.checked=false;
document.form1.usemagicdevice_ics.checked=false;
document.form1.userope_ics.checked=false;
document.form1.autohypnosis_ics.checked=false;
document.form1.knowpsi_ics.checked=false;
document.form1.psicraft_ics.checked=false;
document.form1.usepsionicdevice_ics.checked=false;
unarmored=false;
document.form1.moniker.value="";
document.form1.stat1_list.selectedIndex=0;
document.form1.stat2_list.selectedIndex=0;
document.form1.stat3_list.selectedIndex=0;
document.form1.stat4_list.selectedIndex=0;
document.form1.stat5_list.selectedIndex=0;
document.form1.stat6_list.selectedIndex=0;
stat1=0;
stat2=0;
stat3=0;
stat4=0;
stat5=0;
stat6=0;
clearall();
total_levels=0;
ClearAllAbilityAssignments();
NegateTheBottomStuff();
}