// const addMealHandler = async (event) => {
//     event.preventDefault();
    
//     const response = await fetch('/api/users', { // unsure of which route to put here
//       method: 'POST',
//       body: JSON.stringify({ dinner }), // posting meal name to meal plan? unsure what property to call here too
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to sign up.');
//     }
// };

// document
//     .querySelector('#addMeal')
//     .addEventListener('click', addMealHandler);