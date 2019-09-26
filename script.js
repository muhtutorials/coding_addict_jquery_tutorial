$(document).ready(function() {
    // $('div, span, p, a').html('Yeah!');
    // let result = $('div, span, p, a').length;  // number of selected elements which is 5
    // result = $('div, span, p, a')
    // console.log(result);
    // $('#main').html('div with id main');
    // $('.special').hide();
    // $('.parent>span').css('color', 'red');  // span inside parent class

    // $('#main2 h1+h2').css('color', 'green');  // select sibling

    // $('p[class]').addClass('background')  // select p with any class

    // $('a[href="#"]').addClass('link')  // select link which is "#"
    // $('a[href!="#"]').addClass('link2')  // select link which is not "#"
    // $('a[href^="https"]').addClass('link3')  // select link which starts with "https"
    // $('a[href$="html"]').addClass('link4')  // select link which ends with "html"

    // $('.first li:first').css('font-size', '40px');
    // $('.first li:last').html('I am the last element');
    // $('.second li:even').css('background-color', 'cyan');
    // $('.second li:odd').css('background-color', 'gray');
    // $('.third li:eq(2)').hide(); // eq index starts from 0
    // $('.third li:lt(2)').css('font-size', '30px');
    // $('.third li:gt(2)').css('font-size', '10px');

    // $(':input').addClass('border');
    // $('input').css('background-color', 'green'); // select actual inputs

    // $('div')
    // .hide(2000)
    // .html('Bye')
    // .addClass('border')
    // .show(2000);  // 2000 is ms, example of chaining

    // $('p').each(function (index, element) {
    //     $(element).text   // we need to select element to convert it from JS object to JQuery object
    //     // or
    //     let item = this;
    //     item.text();
    // })

    // let classNames = [];
    // $('p[class]').each(function(i) {
    //     classNames[i] = $(this).attr('class')
    // })
    // console.log(classNames.join(','))

    // $('li').each(function(index) {
    //     if (index % 2 === 1) {
    //         $(this).addClass('red').text(index % 2)
    //     } else {
    //         $(this).addClass('green').text(index % 2)
    //     }
    // })

    // $('img').each(function(i) {
    //     if (i % 2 === 1) {
    //         $(this).addClass('even').attr({"src": "img.jpg", "title": "even photo"})
    //     } else {
    //         $(this).attr({"src": "img.jpg", "title": "odd photo", "class": "odd"})
    //     } 
    // })

    // let first = $('#append');
    // let second = $('#appendTo');
    // first.append('<div class="append">added element after</div>')
    // first.prepend('<div class="prepend">added element before</div>')
    // // or
    // $('<div class="append">added element after</div>').appendTo(second);
    // $('<div class="prepend">added element before</div>').prependTo(second);

    // $('#main').addClass('special special-2');
    // $('p').removeClass('special');  // without parameter removes all classes
    // $('p, div, span').click(function() {
    //     $(this).toggleClass('special')
    // })
    // console.log($('div').hasClass('special')) // return true
    // $('span').css({
    //     "color": "white",
    //     "background-color": "black"
    // })

    // $('#btn').click(function() {
    //     $('div').toggleClass('div-class')
    // })

    // $('#first_name, #last_name, #email').change(function() {
    //     $(this).addClass('input-class')
    // })

    // $('#main').hover(function() {
    //     $(this).addClass('special')
    // })
    // $('#main2').mouseenter(function() {
    //     $(this).css('font-size', '18px')
    // }).mouseleave(function() {
    //     $(this).css('font-size', '16px')
    // })
    // $('#main3').on('click mouseenter hover', function() {
    //     $(this).css('background-color', 'purple')
    // })

    // let mainDiv = $('#main');
    // mainDiv.on('mouseover mouseleave', changeDiv);
    // mainDiv.on('click', function() {
    //     mainDiv.off('mouseover mouseleave', changeDiv);
    //     mainDiv.html('I was clicked');
    //     mainDiv.removeClass('change');
    // })
    // function changeDiv() {
    //     mainDiv.toggleClass('change')
    // }

    // $('#btn').click(function() {
    //     // $('.simple').addClass('hide')
    //     let simpleDiv = $('.simple');
    //     let specialDiv = $('.complex');
    //     // if (simpleDiv.is(':hidden')) {
    //     //     simpleDiv.show('fast')
    //     // } else {
    //     //     simpleDiv.hide('slow')
    //     // }
    //     // specialDiv.toggle(2000)
    //     // specialDiv.fadeOut(1000).fadeIn(1000);
    //     // specialDiv.fadeToggle(2000);
    //     // specialDiv.fadeTo(2000, 0.3)  // 0.3 is opacity
    //     // simpleDiv.slideToggle(1000);
    //     specialDiv.animate({
    //         fontSize: "60px",
    //         marginLeft: "-100px"
    //     }, 2000)
    // })

    // $.ajax({
    //     url: 'simple.txt',
    //     dataType: 'text',
    //     method: 'GET',  // default
    //     success: gotData,
    //     error: noData
    // })
    // function gotData(data) {
    //     console.log(data);
    //     $('#result').text(data);
    // }
    // function noData(xhr) {
    //     console.log(xhr)
    //     alert('Sorry, something went wrong')
    // }
    // $('#result').load('simple.txt', function(response, status, xhr) {
    //     if (status === "error") {
    //         alert("Something went wrong: " + xhr.status + " " + xhr.statusText)
    //     } else {
    //         console.log('yeah')
    //     }
    // });  // shorthand method of AJAX

    let url = 'https://raw.githubusercontent.com/codingaddictla/random-quotes/master/quotes.json'
    // $.getJSON(url, gotData)  // or
    $.ajax({
        method: 'GET',
        url: url,
        dataType: 'json'
    }).done(gotData)
    function gotData(data) {
        $.each(data, workData)    
    }
    function workData(index, dataSet) {
        $('#main').append('<div class="change">' + dataSet.author + ' is the author number: ' + index + '</div>')
    }

})