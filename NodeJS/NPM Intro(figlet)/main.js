const figlet = require('figlet');

function figletText(text) {

    let figletData;

    figlet(text, {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        figletData = data;
    });

    return figletData;
}

module.exports.figletText = figletText;