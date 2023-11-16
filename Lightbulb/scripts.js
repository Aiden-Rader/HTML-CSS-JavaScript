document.addEventListener('DOMContentLoaded', function () 
{
    const lightbulb = document.getElementById('lightbulb');
    const toggleSwitch = document.getElementById('toggleSwitch');
    const switchText = document.getElementById('switchText');

    toggleSwitch.addEventListener('change', function () 
    {
        if (toggleSwitch.checked) 
        {
            lightbulb.classList.add('on');
            switchText.textContent = 'Light is on';
        } else 
        {
            lightbulb.classList.remove('on');
            switchText.textContent = 'Flip Switch';
        }
    });
});
