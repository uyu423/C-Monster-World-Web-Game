function go(num)
{
    meter = meter + num;
}

function rsp(char, com) //가위바위보 판단함수
{
    if (char == 0) {
        if (com == 0) {
            return 0;
        }
        if (com == 1) {
            return -1;
        }
        if (com == 2) {
            return 1;
        }
    }
    if (char == 1) {
        if (com == 0) {
            return 1;
        }
        if (com == 1) {
            return 0;
        }
        if (com == 2) {
            return -1;
        }
    }
    if (char == 2) {
        if (com == 0) {
            return -1;
        }
        if (com == 1) {
            return 1;
        }
        if (com == 2) {
            return 0;
        }
    }
}

function que_mondead(i) {
    if (monster[i].now_hp <= 0) {
        monster[i].now_hp = 0;
        draw_skull(1);
        char.now_exp = char.now_exp + monster[i].exp;
        que_levelup();
        now_monster = 0;
        setTimeout(draw_back, 2000);
        setTimeout(draw_char, 2000);
        setTimeout(draw_stat_char, 2000);
        setTimeout(draw_arrow, 2000);
        setTimeout(draw_meter, 2000);
        setTimeout(GIVE_AEL_ARROW, 2000);
        setTimeout(levelup_mon, 2000, i);
    }
    if (monster[i].now_hp > 0) {
        setTimeout(draw_back, 2000);
        setTimeout(draw_char, 2000);
        setTimeout(draw_stat_char, 2000);
        setTimeout(draw_mon, 2000, i);
        setTimeout(draw_stat_mon, 2000, i);
        setTimeout(draw_meter, 2000);
        setTimeout(draw_rsp, 2000);
        setTimeout(GIVE_AEL_RSP, 2000);
    }
    draw_rsp_char(char_rsp);
    draw_rsp_com(com_rsp);
}

function que_levelup() {
    if (char.now_exp >= char.max_exp) {
        var tmp;
        char.lv++;
        char.point = char.point + 3;
        tmp = char.now_exp - char.max_exp;
        char.max_exp = char.max_exp + 20;
        char.now_exp = tmp;
    }
}

function que_gameover(i) {
    if (char.now_hp <= 0) {
        char.now_hp = 0;
        draw_skull(0);
        gameover_flag = 1;
        gameover();
    }
}

function levelup_mon(i) {
    monster[i].lv++;
    monster[i].ap = monster[i].ap + Math.floor(monster[i].ap / 5);
    monster[i].dp = monster[i].dp + Math.floor(monster[i].dp / 5);
    monster[i].max_hp = monster[i].max_hp + Math.floor(monster[i].max_hp / 10);
    monster[i].now_hp = monster[i].max_hp;
    monster[i].exp = monster[i].exp + Math.floor(monster[i].exp / 10);
}

function run_effect_char(i) {
    music[1].play();
    effectbx_char = 380;
    effectby_char = 280;
    effect_size_char = 5;
    effect_char = setInterval(draw_effect_char, 1000 / 40);
    setTimeout(down_effect_char, 150, i);
}

function down_effect_char(i) {
    effect_char = setInterval(clear_effect_char, 1000 / 40, i);
}

function run_effect_com(i) {
    music[3].play();
    effectbx_com = 350;
    effectby_com = 50;
    effect_size_com = 5;
    effect_com = setInterval(draw_effect_com, 1000 / 40);
    setTimeout(down_effect_com, 100, i);
}

function down_effect_com(i) {
    effect_com = setInterval(clear_effect_com, 1000 / 40, i);
}
