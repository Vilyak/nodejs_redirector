$(document).ready((function(){var e=i(205,215),t=$.cookie("form-data"),s=$.cookie("form-index"),r={16:{texts:["1 неделя","2 неделя","3 неделя","4 неделя"],sub:-4,ver:"v1"},20:{texts:["4 неделя","5 неделя"],sub:-16,ver:"v2"},25:{texts:["2 неделя","4 неделя","6 неделя"],sub:-8,ver:"v3"},30:{texts:["1 месяц","2 месяц"],sub:-16,ver:"v4"},45:{texts:["1 месяц","2 месяц","3 месяц"],sub:-15,ver:"v3"},60:{texts:["1 месяц","2 месяц","3 месяц","4 месяц"],sub:-15,ver:"v1"},75:{texts:["1 месяц","2 месяц","3 месяц","4 месяц","5 месяц"],sub:-15,ver:"v5"}};function o(e,t){return t[e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]]}function i(e,t){return Math.floor(e+(t-e)*Math.random())}setInterval((function(){e%100==0&&e++,$(".top-line__count").text(e),(e+=i(-10,10))<153&&(e=153)}),1e4),23==s&&($("form").deserialize(t),s=0),s&&($(".test__question-current").removeClass("test__question-current"),$($(".test__question").get(s)).addClass("test__question-current"),$(".test__progress-count").text(+s+1+"/23"),$(".test__progress-bar-line").css("width",Math.ceil(100*s/23)+"%"),$("form").deserialize(t),s>0&&$(".test__head").css("display","none")),$(".maintest").submit((function(e){var t=$(this).find(".test__question-current"),s=t.next(),r=t.index();switch(e.preventDefault(),r){case 1:var o=$("[name=user-age]").val().trim();if(""==o||parseInt(o)<18||parseInt(o)>90||!/^\d+$/.test(o))return void c("Введите корректный возраст цифрами");$(".test__head").css("display","none");break;case 2:var i=$("[name=user-height]").val().trim(),n=$("[name=user-weight]").val().trim();if(""==i||""==n)return void c("Введите возраст, рост и вес");if(parseInt(i)<80||parseInt(i)>250||!/^\d+$/.test(i))return void c("Введите корректный рост цифрами");if(parseInt(n)<40||parseInt(n)>250||!/^\d+$/.test(n))return void c("Введите корректный вес цифрами");break;case 3:n=parseInt($("[name=user-weight]").val().trim());var a=$("[name=user-hope]").val().trim();if(""==a||!/^\d+$/.test(a)||n-parseInt(a)<40)return void c("Введите корректное значение цифрами");break;case 4:if(void 0===$("[name=question-2]:checked").val())return void c('Вы не ответили на вопрос. Выберите вариант ответа и нажмите на кнопку “Ответить"');break;case 5:if(void 0===$("[name=question-n6]:checked").val())return void c('Вы не ответили на вопрос. Выберите вариант ответа и нажмите на кнопку “Ответить"');break;case 6:if(void 0===$("[name=question-4]:checked").val())return void c('Вы не ответили на вопрос. Выберите вариант ответа и нажмите на кнопку “Ответить"');break;case 7:if(void 0===$("[name=question-5]:checked").val())return void c('Вы не ответили на вопрос. Выберите вариант ответа и нажмите на кнопку “Ответить"');break;case 8:if(void 0===$("[name=question-6]:checked").val())return void c('Вы не ответили на вопрос. Выберите вариант ответа и нажмите на кнопку “Ответить"');break;case 9:if(void 0===$("[name=question-7]:checked").val())return void c('Вы не ответили на вопрос. Выберите вариант ответа и нажмите на кнопку “Ответить"');break;case 10:if(void 0===$("[name=question-8]:checked").val())return void c('Вы не ответили на вопрос. Выберите вариант ответа и нажмите на кнопку “Ответить"');break;case 11:if(void 0===$("[name=question-9]:checked").val())return void c('Вы не ответили на вопрос. Выберите вариант ответа и нажмите на кнопку “Ответить"');break;case 12:if(void 0===$("[name=question-11]:checked").val())return void c('Вы не ответили на вопрос. Выберите вариант ответа и нажмите на кнопку “Ответить"');break;case 13:if(void 0===$("[name=question-12]:checked").val())return void c('Вы не ответили на вопрос. Выберите вариант ответа и нажмите на кнопку “Ответить"');break;case 14:if(void 0===$("[name=question-13]:checked").val())return void c('Вы не ответили на вопрос. Выберите вариант ответа и нажмите на кнопку “Ответить"');break;case 15:if(void 0===$("[name=question-14]:checked").val())return void c('Вы не ответили на вопрос. Выберите вариант ответа и нажмите на кнопку “Ответить"');break;case 16:if(void 0===$("[name=question-15]:checked").val())return void c('Вы не ответили на вопрос. Выберите вариант ответа и нажмите на кнопку “Ответить"');break;case 17:if(void 0===$("[name=question-16]:checked").val())return void c('Вы не ответили на вопрос. Выберите вариант ответа и нажмите на кнопку “Ответить"');break;case 18:if(void 0===$("[name=question-17]:checked").val())return void c('Вы не ответили на вопрос. Выберите вариант ответа и нажмите на кнопку “Ответить"');break;case 19:if(void 0===$("[name=question-18]:checked").val())return void c('Вы не ответили на вопрос. Выберите вариант ответа и нажмите на кнопку “Ответить"');break;case 20:if(void 0===$("[name=question-19]:checked").val())return void c('Вы не ответили на вопрос. Выберите вариант ответа и нажмите на кнопку “Ответить"');break;case 21:if(void 0===$("[name=question-20]:checked").val())return void c('Вы не ответили на вопрос. Выберите вариант ответа и нажмите на кнопку “Ответить"');break;case 22:if($('.test__question-22 input[type="checkbox"]:checked').length>=3)return void c("Выберите один или два варианта");if(0===$(' .test__question-22 input[type="checkbox"]:checked').length)return void c("Выберите один или два варианта");break;case 23:if($("[name=user-country]").val().length<3)return void c("Введите корректный город")}function c(e){$(".test__question-alert").html(e).css("padding","15px");var t=$(".test__question-alert").get(0).getBoundingClientRect();t.top<0&&$(document.body).stop().animate({scrollTop:document.body.scrollTop+t.top},500)}if($.cookie("form-data",$(this).serialize()),$.cookie("form-index",r),$(".test__question-alert").html("").css("padding","0"),t.removeClass("test__question-current"),$(".test__progress-count").text(r+1+"/23"),s.hasClass("test__question")){s.addClass("test__question-current"),$(".test__progress-bar-line").css("width",Math.ceil(100*r/23)+"%"),(l=s.get(0).getBoundingClientRect()).top<0&&$(document.body).stop().animate({scrollTop:document.body.scrollTop+l.top},500)}else{$(".test__question-total").show(),$(".test__progress-name-name").text("Процесс вычисления результата"),$(".test__progress-bar-line").css({transition:"none","-webkit-transition":"none"}).css("width","0"),$(".pie_progress-1").asPieProgress({namespace:"pie_progress-1",size:100,barcolor:"#BE0F12",barsize:"12",trackcolor:"#fff",numberCallback:function(e){return Math.round(e)+'<span style="font-size: 24px; line-height: 20px; "> <br>%</span>'},speed:16}),$(".pie_progress-2").asPieProgress({namespace:"pie_progress-2",size:100,barcolor:"#BE0F12",barsize:"12",trackcolor:"#fff",numberCallback:function(e){return Math.round(e)+'<span style="font-size: 24px; line-height: 20px; "> <br>%</span>'},speed:16}),$(".pie_progress-3").asPieProgress({namespace:"pie_progress-3",size:100,barcolor:"#BE0F12",barsize:"12",trackcolor:"#fff",numberCallback:function(e){return Math.round(e)+'<span style="font-size: 24px; line-height: 20px; "> <br>%</span>'},speed:18}),$(".pie_progress-6").asPieProgress({namespace:"pie_progress-6",size:100,barcolor:"#BE0F12",barsize:"12",trackcolor:"#fff",numberCallback:function(e){return Math.round(e)+'<span style="font-size: 24px; line-height: 18px; "> <br></span>'}});var l,p=0,u=window.innerWidth<=768;u&&(l=$(".test__question-total-title").get(0).getBoundingClientRect(),$(document.body).stop().animate({scrollTop:document.body.scrollTop+l.top},200),$("button.test__question-table-item").click((function(){$(this).slideUp(),$(".test__question-table").slideDown()}))),$(".pie_progress-1").asPieProgress("go","100%"),setTimeout((function(){$(".pie_progress-2").asPieProgress("go","100%"),u&&(l=$(".pie_progress-2").parent().get(0).getBoundingClientRect(),$(document.body).stop().animate({scrollTop:document.body.scrollTop+l.top},200)),setTimeout((function(){$(".pie_progress-3").asPieProgress("go","100%"),u&&(l=$(".pie_progress-3").parent().get(0).getBoundingClientRect(),$(document.body).stop().animate({scrollTop:document.body.scrollTop+l.top},200))}),1500)}),2e3),$(".test__progress-bar-line").css({transition:"width 5s linear","-webkit-transition":"width 5s linear"}).css("width","100%"),function e(){p<100?(p+=1,$(".test__progress-count").text(p+"%"),setTimeout(e,50)):(u?($(".test__progress-name-name").text("Результат теста").parent().css("padding",0),$(".test__progress-bar").hide()):$(".test__progress-name-name").text("Готово"),$(".test__progress-count").text(""),$(".test__question-total-title").slideUp("slow"),$(".test__question-total-text").slideDown("slow",(function(){u&&(l=$(".test__question-total-text").get(0).getBoundingClientRect(),$(document.body).stop().animate({scrollTop:document.body.scrollTop+l.top},500))})),$(".test__question-total-btn").slideDown("slow"))}()}})),$(".test__question-total-btn .btn").click((function(){$(".test__question-total-text").remove(),$(".test__question-total-btn").remove(),$(".test__question-total-title").text("Результат теста"),$(".test__question-total-wrapper-hide").hide(),$(".test__question-total-wrapper-show").show((function(){var e,t=$("input[name=question-n6]:checked").val(),s=1==t?.9:2==t?1:1.1,n=parseInt($("input[name=user-weight]").val().trim()),a=parseInt($("input[name=user-height]").val().trim()),c=parseInt($("input[name=user-age]").val().trim()),l=parseInt($("[name=user-hope]").val().trim()),p=Math.round(c<40?(a-110)*s:(a-100)*s),u=n/(a*a),d=u<=.0025?0:u<=.0035?1:u<=.004?2:3;e=l<5?l+1:l<10?l+2:l-2,$(".pie_progress-4").asPieProgress({namespace:"pie_progress-4",size:100,barcolor:"#BE0F12",barsize:"12",trackcolor:"#fff",rVal:n,numberCallback:function(e){return this.options.rVal+'<span style="font-size: 24px; line-height: 21px; "><br> кг</span>'}}),$(".pie_progress-5").asPieProgress({namespace:"pie_progress-5",size:100,barcolor:"#BE0F12",barsize:"12",trackcolor:"#fff",rVal:e,numberCallback:function(e){return this.options.rVal+'<span style="font-size: 24px; line-height: 21px; "><br> кг</span>'}});var _="Вы планируете похудеть на "+l+" "+o(l,["килограмм","килограмма","килограмм"])+". Согласно нашему анализу, у вас есть примерно "+e+" "+o(e,["лишний килограм","лишних килограмма","лишних килограмм"])+". ";switch(d){case 1:_+="Это первая степень ожирения, ваш вес превышает нормальный на "+Math.round(100*(n/p-1))+"%.";break;case 2:_+="Это вторая степерь ожирения, ваш вес превышает нормальный на "+Math.round(100*(n/p-1))+"%.";break;case 3:_+="Это III степень ожирения, ваш вес превышает норму на 138% "+Math.round(100*(n/p-1))+"%."}_+="<br />Стоит обратить внимание на риск заболеваний:",$(".test__question-text").html(_),_='Похудение избавит вас от многих возможных и уже имеющихся болезней. Анализ ваших ответов помог подобрать наиболее эффективный метод похудения персонально для вас:<br><h4>Капсулы для похудения <b>BioVittoria</b></h4><br><img src="product.png" width=300><br>Препарат восстанавливает выработку гормона лептин естественным путем, в результате чего налаживаются обменные и энергетические процессы. Лептин стимулирует синтез анорексигенов- веществ, подавляющих аппетит и тормозит синтез орексигенов- стимуляторов аппетита. Также воздействует на нейроны, которые формируют чувство удовлетворения от еды и чувство насыщения. Повышение концентрации лептина сопровождается снижением аппетита.<br>Следуя рекомендациям данной методики вы сбросите не только <span class="strong">'+l+" кг </span>но при желании сможете худеть дальше и достигнуть отметки с правильным весом ",$(".test__question-total-p").html(_),$(".pie_progress-4").asPieProgress("go","100%"),$(".pie_progress-5").asPieProgress("go","100%"),$(".pie_progress-6").asPieProgress("go");$("input[name=question-4]:checked").val(),$("input[name=question-5]:checked").val(),$("input[name=question-6]:checked").val(),$("input[name=question-14]:checked").val(),$("input[name=question-15]:checked").val();var m=$("input[name=question-18]:checked").val(),g=$("input[name=question-17]:checked").val(),b="",f={"29_l25":{name:"Оксаны Михайдаровой",lost:18,time:"5 недель"},"29_l40":{name:"Алены Жучковой",lost:35,time:"8 недель"},"29_g40":{name:"Ольги Михайловой",lost:42,time:"13 недель"},"44_l25":{name:"Евгении Новоселовой",lost:25,time:"6 недель"},"44_l40":{name:"Марины Минаевой",lost:37,time:"8 недель"},"44_g40":{name:"Анны Князевой",lost:47,time:"13 недель"}};b=c<=40?e<25?"29_l25":e<40?"29_l40":"29_g40":e<25?"44_l25":e<40?"44_l40":"44_g40",b="44_g40",i(0,100),$(".his_name").text(f[b].name),$(".his_lost").text(f[b].lost+" "+o(f[b].lost,["килограмм","килограмма","килограмм"])),$(".his_time").text(f[b].time),function(e){var t;for(t in r)if(t>=e)break;var s=r[t],o=$(".anim").addClass(s.ver);s.texts.forEach((function(t,r,i){++r<i.length?(o.find(".p"+r+" div").text(t),o.find(".p"+r+" b").text(s.sub+"кг")):(o.find(".flag div").text(t),o.find(".flag b").text(-1*(e+(r-1)*s.sub)+"кг"))}))}(e);var h=!1,v=!1;switch($(window).scroll((function(){if(!h&&$(this).scrollTop()>250){h=!0;var e=0,t=100;switch(d){case 0:c<=30?(e=15,t=25):c<=50?(e=26,t=36):(e=37,t=60);break;case 1:c<=30?(e=22,t=37):c<=50?(e=34,t=48):(e=49,t=65);break;case 2:c<=30?(e=35,t=50):c<=50?(e=40,t=60):(e=55,t=80);break;case 3:c<=30?(e=45,t=70):c<=50?(e=55,t=80):(e=70,t=95)}var s=i(e,t),r=i(e,t),o=i(e,t),n=i(e,t),a=i(e,t),l=i(e,t);1==$("input[name=question-15]:checked").val()&&(s=i(70,90));var p="#d24a43",u="#e18c44",_="#bdef75";$(".pie_progress-7").asPieProgress({namespace:"pie_progress-6",size:100,barcolor:s<=30?_:s<=60?u:p,barsize:"8",trackcolor:"#fff",fillcolor:window.innerWidth<400?"#167db1":"transparent",numberCallback:function(e){return Math.round(e)+'<span style="font-size: 12px;  ">%</span>'}}),$(".pie_progress-8").asPieProgress({namespace:"pie_progress-6",size:100,barcolor:r<=30?_:r<=60?u:p,barsize:"8",trackcolor:"#fff",fillcolor:window.innerWidth<400?"#167db1":"transparent",numberCallback:function(e){return Math.round(e)+'<span style="font-size: 12px;  ">%</span>'}}),$(".pie_progress-9").asPieProgress({namespace:"pie_progress-6",size:100,barcolor:o<=30?_:o<=60?u:p,barsize:"8",trackcolor:"#fff",fillcolor:window.innerWidth<400?"#167db1":"transparent",numberCallback:function(e){return Math.round(e)+'<span style="font-size: 12px;  ">%</span>'}}),$(".pie_progress-10").asPieProgress({namespace:"pie_progress-6",size:100,barcolor:n<=30?_:n<=60?u:p,barsize:"8",trackcolor:"#fff",fillcolor:window.innerWidth<400?"#167db1":"transparent",numberCallback:function(e){return Math.round(e)+'<span style="font-size: 12px;  ">%</span>'}}),$(".pie_progress-11").asPieProgress({namespace:"pie_progress-6",size:100,barcolor:a<=30?_:a<=60?u:p,barsize:"8",trackcolor:"#fff",fillcolor:window.innerWidth<400?"#167db1":"transparent",numberCallback:function(e){return Math.round(e)+'<span style="font-size: 12px;  ">%</span>'}}),$(".pie_progress-12").asPieProgress({namespace:"pie_progress-6",size:100,barcolor:l<=30?_:l<=60?u:p,barsize:"8",trackcolor:"#fff",fillcolor:window.innerWidth<400?"#167db1":"transparent",numberCallback:function(e){return Math.round(e)+'<span style="font-size: 12px;  ">%</span>'}}),$(".pie_progress-7").asPieProgress("go",s+"%"),$(".pie_progress-8").asPieProgress("go",r+"%"),$(".pie_progress-9").asPieProgress("go",o+"%"),$(".pie_progress-10").asPieProgress("go",n+"%"),$(".pie_progress-11").asPieProgress("go",a+"%"),$(".pie_progress-12").asPieProgress("go",l+"%")}var m=$(".anim").get(0).getBoundingClientRect().top;!v&&m>0&&m<window.innerHeight-70&&(v=!0,function e(){$(".anim").addClass("run"),setTimeout((function(){$(".anim").removeClass("run"),setTimeout(e,2e3)}),1e4)}())})),($("#radio-8-1").prop("checked")||$("#radio-8-2").prop("checked"))&&$(".test__question-total-list").append("<li>Периодически употребляет пищу после полуночи </li>"),($("#radio-14-1").prop("checked")||$("radio-14-2").prop("checked"))&&$(".test__question-total-list").append("<li>Генетически предрасположены к лишнему весу (есть полные родственники)</li>"),parseInt($("input[name=question-n6]:checked").val())){case 1:$(".test__question-total-list").append("<li>Для людей с астеническим типом телосложения</li>");break;case 2:$(".test__question-total-list").append("<li>Для людей с нормостеническим типом телосложения</li>");break;case 3:$(".test__question-total-list").append("<li>Для людей с гиперстеническим типом телосложения</li>")}$("#radio-15-1").prop("checked")&&$(".test__question-total-list").append("<li>Имеют заболевания, связанные с уровнем сахара в крови </li>"),($("#radio-16-1").prop("checked")||$("#radio-16-2").prop("checked"))&&$(".test__question-total-list").append("<li>Ведут малоподвижный образ жизни </li>"),$("#radio-18-1").prop("checked")&&$(".test__question-total-list").append("<li>Набрали вес во время беременности или после рождения ребенка </li>"),$("radio-18-2").prop("checked")&&$(".test__question-total-list").append("<li>Имеют проблемы с лишним весом с дества </li>"),$(".test__question-total-a").text("С нашим методом вы сбросите "+e+" кг за "+2*e+" "+o(2*e,["день","дня","дней"]))}))}))}));