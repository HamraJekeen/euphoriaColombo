import './bootstrap';
import 'preline';
document.addEventListener('livewire:navigated', () => { 
    window.HSStaticMethods.autoInit(); // Corrected window object and method name
});
