# Soal 1

## Soal 1.1

Buatlah logika program sederhana untuk mencetak deretan angka seperti dibawah ini. Panjangnya angka ditentukan dari inputan n. Jika inputan n = 7 dan n = 9, maka output seperti dibawah ini:

```js
// jika inputan n = 7

1**4567
12**567
123**67
1234**7

// jika inputan n = 9

1**456789
12**56789
123**6789
1234**789
12345**89
123456**9
```

Jawaban:

```js
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
```