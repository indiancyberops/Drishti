exports.show = () => {


    const ig = require('instagram-scraping');
    const banner = require('./banner');
    const cTable = require('cli-table');
    const clr = require('colors');
    const ask = require('prompt-sync')();
    const request = require('request');
    const fs = require('fs');



    console.clear();
    banner.show('fruit', 'Instagram Lookup');
    console.log('');
    const username = banner.ask("Enter Username");



    function bool(x) {
        if (x) {
            return 'Yes';
        } else {
            return 'No';
        }
    }


    function is_null(x) {
        if (x == null) {
            return 'n/a';
        } else {
            return x;
        }
    }

    function qus2() {

        const qus2 = ask('Do You want to show Media Info? '.magenta + '[Y/N] '.yellow).toLowerCase();

        if (qus2 == 'y') {
            console.log('This Function is currently unavailable');
        } else if (qus2 == 'n') {
            console.log('Bye!');
        } else {
            console.log('Invalid Input!'.cyan);
        }
    }



    function SHOW_USER() {


        console.log('\nGetting User\'s Detail... \n');

        ig.scrapeUserPage(username).then((result) => {

            //console.log(result.user);


            var table = new cTable({
                chars: {
                    'top': '═'.brightRed, 'top-mid': '╤'.brightRed, 'top-left': '╔'.brightRed, 'top-right': '╗'.brightRed
                    , 'bottom': '═'.brightRed, 'bottom-mid': '╧'.brightRed, 'bottom-left': '╚'.brightRed, 'bottom-right': '╝'.brightRed
                    , 'left': '║'.brightRed, 'left-mid': '╟'.brightRed, 'mid': '─'.brightRed, 'mid-mid': '┼'
                    , 'right': '║'.brightRed, 'right-mid': '╢'.brightRed, 'middle': '│'.brightRed
                }
            });

            table.push(
                [`Username`.yellow, username],
                [`Full Name`.yellow, is_null(result.user.full_name)],
                [`Biography`.yellow, is_null(result.user.biography)],
                [`Followers`.yellow, is_null(result.user.edge_followed_by.count)],
                [`Following`.yellow, is_null(result.user.edge_follow.count)],
                [`Posts`.yellow, is_null(result.user.edge_owner_to_timeline_media.count)],
                [`Private`.yellow, is_null(result.user.is_private)],
                [`Verified`.yellow, is_null(result.user.is_verified)],
                [`Recently Joined`.yellow, is_null(result.user.is_joined_recently)],
                [`Reels Count`.yellow, is_null(result.user.highlight_reel_count)],
                [`IGTV Count`.yellow, is_null(result.user.edge_felix_video_timeline.count)],
                [`ID`.yellow, is_null(result.user.id)],
                [`FBid`.yellow, is_null(result.user.fbid)],
                [`Professional Account`.yellow, is_null(result.user.is_professional_account)],
                [`Business Account`.yellow, is_null(result.user.is_business_account)],
                [`Business Contact Method`.yellow, is_null(result.user.business_contact_method)],
                [`Business Email`.yellow, is_null(result.user.business_email)],
                [`Business Phone Number`.yellow, is_null(result.user.business_phone_number)],
                [`Business Category`.yellow, is_null(result.user.business_category_name)],
                [`External Url`.yellow, is_null(result.user.external_url)],
                [`Country Block`.yellow, is_null(result.user.country_block)],
                [`Clips`.yellow, is_null(result.user.has_clips)],
                [`Guides`.yellow, is_null(result.user.has_guides)],
                [`Channel`.yellow, is_null(result.user.has_channel)],
                [`Category`.yellow, is_null(result.user.category_name)]

            );

            console.log(clr.green(table.toString()));

            const dp_url = result.user.profile_pic_url_hd;

            var dp = ask('Do You want to Download Profile Picture (HD)? '.magenta + '[Y/N] '.yellow).toLowerCase();

            if (dp.toLowerCase() == 'y') {
                request(dp_url).pipe(fs.createWriteStream(`./images/${username}.png`));
                console.log(`\nImage Saved to /images/${username}.png`);
            }

            setTimeout(() => {
                require('./back').back();
            }, 800);

        }).catch((err) => {
            //console.log(err);

            console.log('\nSomething went wrong! Please check your username and try again after some time!'.brightRed.italic);
            setTimeout(() => {
                require('./back').back();
            }, 100);
        });

    }

    SHOW_USER();


}
