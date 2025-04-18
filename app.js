
//terminalda kalkulyator ve proses fayllar ucun
/*import process from "process"

const args = process.argv
const n1= +args[2]
const o= args[3]
const n2= +args[4]


let result="";
if(o === "+"){
    result = `${n1} + ${n2} = ${n1+n2}`
}else if(o === "-"){
    result = `${n1} - ${n2} = ${n1-n2}`
}else if(o === "/"){
    result = `${n1} / ${n2} = ${n1/n2}`
}else if(o === "*"){
    result = `${n1} * ${n2} = ${n1*n2}`
}

console.log(result)
*/
//-----------------------------------------------------------------------------------------
/*import { writeFile, unlink, mkdir, rm } from 'fs';
import process from "process"
const args = process.argv;
const command =args[2]
const fileName = args[3];
const data = args[4];

// node app readFile 
//  node app createFile bunlari yazanda emr bas verir

if (command === 'readFile'){
    readFile('users.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('Fayl oxunarkən xəta:', err.message);
        } else {
          console.log('Faylın məzmunu:\n', data);
        }
      });
}else if (command === 'createFile'){
    const data = 'Bu, yeni yaradılmış bir fayldır.';

    writeFile('myfile.txt', data, (err) => {
      if (err) throw err;
      console.log('Fayl yaradıldı və məlumat yazıldı!');
    });
}
else if (command === 'deleteFile') {
    unlink('myfile.txt', (err) => {
        if (err) {
          console.error('Fayl silinərkən xəta baş verdi:', err.message);
        } else {
          console.log(`${'myfile.txt'} faylı uğurla silindi.`);
        }
      });
    }
else if (command === 'createFolder') {
    mkdir("newFolder", { recursive: true }, (err) => {
        if (err) {
          console.error('Qovluq yaradılmadı:', err.message);
        } else {
          console.log(`${"newFolder"} qovluğu uğurla yaradıldı.`);
        }
      });
}
else if (command === 'deleteFolder') {
    rm('newFolder', { recursive: true, force: true }, (err) => {
        if (err) console.error('Silinmədi:', err);
        else console.log('Qovluq silindi!');
      });
}
*/
