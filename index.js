window.addEventListener('load', ()=> {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        const task_el = document.createElement('div');
        task_el.classList.add('task');  
        
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content'); 

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type='text';
        task_input_el.value=task;
        
        task_input_el.setAttribute("readonly", "readonly");
        //so that the list of tasks are not editable when displayed withut pressing edit

        //make task input a child of task content element
        //This prevents elements from floating around your document but providing structure.
        task_content_el.appendChild(task_input_el);
        //model the actions 
        //container for action elements
        const task_action_el = document.createElement('div');
        task_action_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText='Edit';

        const task_del_el = document.createElement('button');
        task_del_el.classList.add('delete');
        task_del_el.innerText = 'Delete';

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_del_el);

        task_el.appendChild(task_action_el);
         //we need to reset the value so that you can put in a new value and the value goes to the bottom
        input.value='';

        list_el.appendChild(task_el);
        //we need to give the user a way to edit and delete
        task_edit_el.addEventListener('click', (e)=>{
            if(task_edit_el.innerText.toLowerCase()=="edit"){
                //meaning if task receives edit then do...
                task_edit_el.innerText="Save";
                //because when editing the next action is save
                task_input_el.removeAttribute("readonly");
                //make the task editable
                task_input_el.focus();
            }else{
                task_edit_el.innerText="Edit";
                task_input_el.setAttribute("readonly","readonly");
            } 
        });

        function validateForm() {
            let x = document.forms["task_form"]["new-task-input"].value;
            if (x == "") {
              alert("Task must be filled out");
              return false;
            }
          }

        task_del_el.addEventListener('click', (e)=>{
            list_el.removeChild(task_el);
            //This is that when the delete button is pressed task element is removed
        });
     //assignment is to figure out how to validate so that you don't have blanck notes
     //git touch git_log.txt
    });
});