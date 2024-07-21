let name = 'Cinlo'
function watchName() {
    let lastName = 'Losada'

    function watchLastName(){
        let profession = 'Developer'

        function watchProfession() {
            return name + ' ' + lastName + ' ' + profession;
        }
        return watchProfession
    }
    return watchLastName;
}

console.log(watchName()()())