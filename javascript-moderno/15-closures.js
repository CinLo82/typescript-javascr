const car = (function(){
    let _speed = 0;
    let _color;
    let _marca;
    let _model;
    let _cilindrada;

    function setMarca(marca){
        _marca = marca;
    }

    function getMarca(){
        return _marca;
    }

    function speedUp(){
        _speed++;
        return _speed
    }

    function getSpeedUp(){
        return _speed;
    }

    function stop(){
        _speed--;
        return _speed
    }

    function getStop(){
        return _speed;
    }

    return {
        setMarca,
        getMarca,
        speedUp,
        stop,
        getSpeedUp,
        getStop
    }
})();

car.setMarca('Renault');
car.speedUp();
car.speedUp();
car.speedUp();

console.log('Marca: ',car.getMarca(), 'Velocidad: ', car.getSpeedUp())