var options = [
    'a) pid',
    'b) title',
    'c) arch',
    'd) plataform',
    'e) env',
    'm) memory usage',
    'u) uptime',
    'v) versions',
    'q) EXIT'
];

exports.showOptions = function () {
    options.forEach(function (option) {
        console.log(option);
    });
};