const { NIL } = require('uuid');
const con = require('../../database/conection');

async function lugarMasVisitado() {
    let recordset = {}
    let cadena = ""

    try {
        const pool = await con;
        const result = await pool.request()
            .query(`select Top 1 * from proyecto.Lugar Lu
            where Lu.Puntuacion > '4'
            order by Lu.Puntuacion desc`);

        recordset = result.recordset[0];
    } catch (err) {
        console.log('No se pudo obtener lugar mas visitado: ' + err);
    }

    if (recordset != NIL ){
        cadena = recordset.Nombre + ' en ' + recordset.Lugar + ' con puntuacion ' + recordset.Puntuacion
    }

    return cadena;

}

async function lugarMenosVisitado() {
    let recordset = {}
    let cadena = ""
    try {
        const pool = await con;
        const result = await pool.request()
            .query(`select Top 1  * from proyecto.Lugar Lu
            where Lu.Puntuacion < '4'
            order by Lu.Puntuacion asc`);
        recordset = result.recordset[0];
    } catch (err) {
        console.log('No se pudo obtener lugar menos visitado: ' + err);
    }

    if (recordset != NIL ){
        cadena = recordset.Nombre + ' en ' + recordset.Lugar + ' con puntuacion ' + recordset.Puntuacion
    }

    return cadena;
}

function holaGuate (){
    return 'Somos una plataforma sin fines de lucro, la cual proporciona informacion de los lugares turisticos'
}

async function lugarMasVotado() {
    let recordset = {}
    let cadena = ""

    try {
        const pool = await con;
        const result = await pool.request()
            .query(`select L.ID_lugar,L.Nombre,L.Lugar,L.Foto,L.Puntuacion,L.Tipo,L.Descripcion from proyecto.Lugar L
                    inner join (
                        select Top 1  Fa.ID_lugar as lugar, count(Fa.ID_lugar) as cantidad from proyecto.Favorito Fa
                        group by Fa.ID_lugar
                        order by cantidad desc
                    ) T on T.lugar = L.ID_lugar`);
        recordset = result.recordset[0];
    } catch (err) {
        console.log('No se pudo obtener lugar mas votado: ' + err);
    }

    if (recordset != NIL ){
        cadena = recordset.Nombre + ' en ' + recordset.Lugar + 'con puntuacion ' + recordset.Puntuacion
    }

    return cadena;
}

module.exports = {lugarMasVisitado,lugarMenosVisitado,holaGuate,lugarMasVotado}