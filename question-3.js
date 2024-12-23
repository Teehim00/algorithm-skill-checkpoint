/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:
--- ตอบ findStudentById เป็น LinearSearch เพราะข้อมูล id ไม่ได้เรียงลำดับตัวเลย และก็ให้แสดงผลทั้ง id และ name

*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:
--- ตอบ findProductPrice เป็น BinarySearch เพราะข้อมูล name มีการเรียงลำดับตัวอักษรและก็ใช้ค่า name มาเปรียบเทียบไม่ใช่ใช้ค่า price
แต่แสดงผลให้แสดงค่า price

*/

/* 
Which function is more efficient and why?
Answer:
--- ตอบ ขึ้นอยู่กับรูปแบบข้อมูลที่ต้องการค้นหาว่าจะใช้แบบไหนดี ถ้าข้อมูลมีการเรียงลำดับมาให้ ก็น่าที่จะเลือกใช้ BinarySearch
แต่ถ้าข้อมูลไปไม่มีการเรียงลำดับมาให้ก็น่าจะเลือกใช้ LinearSearch เพราะต้องการค้นหาทุกตัวใน ชุดข้อมูลนั้นๆ

*/
