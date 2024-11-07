        document.getElementById('push').addEventListener('click', function(){
            let commentBox = document.getElementById('input');
            let valueBox = commentBox.value;
            
            let placing = document.getElementById('p-tag');
            let pTag = document.createElement('p');
            pTag.style.color = "darkBlue";
            pTag.innerText = valueBox;
            
            placing.appendChild(pTag);

            commentBox.value = "";
            
        })