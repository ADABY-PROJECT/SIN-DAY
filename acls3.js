function tampilACLSMateri3(){

document.getElementById("infoObat").innerHTML = `

<div class="card">

<h2 style="color:#C62828;">
🚑 ACLS MATERI 3
</h2>

<h3>TACHYCARDIA ALGORITHM</h3>

<hr>

<h3>1. Definisi Tachycardia</h3>

<p>
Tachycardia adalah kondisi dimana denyut jantung meningkat:
</p>

<ul>
<li>Dewasa: HR ≥ 100 kali/menit</li>
<li>Dapat menyebabkan gangguan cardiac output</li>
</ul>


<h3>2. Evaluasi Awal</h3>

<ul>
<li>Pastikan Airway terbuka</li>
<li>Evaluasi Breathing</li>
<li>Monitor ECG 12 lead bila tersedia</li>
<li>Pasang akses IV</li>
<li>Cek tekanan darah dan saturasi oksigen</li>
</ul>


<hr>

<h3 style="color:red;">
Tanda Tachycardia Tidak Stabil
</h3>

<ul>
<li>Hipotensi</li>
<li>Penurunan kesadaran</li>
<li>Tanda syok</li>
<li>Nyeri dada iskemik</li>
<li>Gagal jantung akut</li>
</ul>


<hr>

<h3>3. Tachycardia Tidak Stabil</h3>


<div class="obat-card">

<h3>⚡ Synchronized Cardioversion</h3>

<ul>
<li>SVT: 50-100 Joule</li>
<li>Atrial Flutter: 50-100 Joule</li>
<li>Atrial Fibrillation: 120-200 Joule biphasic</li>
<li>VT dengan nadi: 100 Joule</li>
</ul>

</div>


<hr>


<h3>4. Tachycardia Stabil Narrow QRS</h3>

<p>
QRS &lt; 120 ms
</p>

<div class="obat-card">

<h3>💊 Adenosine</h3>

<ul>
<li>Dosis awal: 6 mg IV rapid bolus</li>
<li>Dosis kedua: 12 mg IV rapid bolus</li>
<li>Flush NaCl setelah pemberian</li>
</ul>

</div>


<p>
Contoh:
</p>

<ul>
<li>SVT</li>
<li>AVNRT</li>
<li>AVRT</li>
</ul>


<hr>


<h3>5. Tachycardia Wide QRS</h3>

<p>
QRS ≥ 120 ms
</p>


<div class="obat-card">

<h3>💊 Amiodarone</h3>

<ul>
<li>150 mg IV selama 10 menit</li>
<li>Dapat diulang sesuai kondisi</li>
<li>Lanjut infus maintenance</li>
</ul>

</div>


<div class="obat-card">

<h3>💊 Lidocaine</h3>

<ul>
<li>1-1,5 mg/kg IV bolus</li>
<li>Dapat diberikan tambahan dosis</li>
</ul>

</div>


<hr>


<h3>6. Penyebab Tachycardia</h3>

<ul>
<li>Hypoxia</li>
<li>Hypovolemia</li>
<li>Demam</li>
<li>Nyeri</li>
<li>Gangguan elektrolit</li>
<li>Infark miokard</li>
<li>Obat stimulan</li>
</ul>


<h3>7. Peran Perawat Anestesi</h3>

<ul>
<li>Siapkan defibrillator</li>
<li>Pastikan mode sync aktif sebelum cardioversion</li>
<li>Siapkan obat emergency</li>
<li>Monitor ECG kontinu</li>
<li>Evaluasi respon terapi</li>
</ul>


<hr>

<h3>
🚨 Emergency Reminder
</h3>

<p>
Tachycardia + tidak stabil =
<strong>segera lakukan synchronized cardioversion</strong>
</p>


</div>

`;

}