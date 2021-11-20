// Soal 1.1

// Buatlah logika program sederhana untuk mencetak deretan angka seperti dibawah ini.
// Panjangnya angka ditentukan dari inputan.

// Jika inputan n = 8

// 1**45678
// 12**5678
// 123**678
// 1234**78
// 12345**8

// Jawaban:

// Versi 1

function printNumber(num) {
     for (let i = 1; i <= num; i++) {
          let result = '';
          
          for (let j = 1; j <= num; j++) {
               result += j;
               if (j == i) {
                    result += '**';
                    j += 2;
               }
          }

          console.log(result);

          if (i == num - 3) {
               break;
          }
     }
}

printNumber(8)


// Soal 1.2

// Buatlah logika program sederhana untuk mencetak deretan angka seperti dibawah ini.
// Panjangnya angka ditentukan dari inputan.

// Jika inputan n = 8

// 1**45678
// 12**5678
// 123**678
// 1234**78
// 12345**8
// 12345**8
// 1234**78
// 123**678
// 12**5678
// 1**45678