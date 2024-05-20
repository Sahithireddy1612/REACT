import React from "react"
const Ipl2024=()=>{
    const Iplteams =["Royal Chalengers Banglore","Sun Risers Hyderabad","Mumbai Indians","Kolkata Knight Riders","Delhi Capitals","Rajasthan Royals","Gujarat Titans","Lucknow Super Gaints","Chennai Super Kings","Punjab Kings"]

    const TeamDetails=[
        {
            TeamName:"RCB",
            WinningCount: 0,
            TeamPlayers :[
                "Virat Kohli","Faf Du Plesis","Glex Maxwell","Dinesh Karthik","Mohammed Siraj","Rajat Patidar","Anuj Rawat","Yash dayal","Mahipal Lomror","Cameroon Green","Mayank Dagar"
            ],
            Images:[
               "https://www.iplt20.com/teams/royal-challengers-bengaluru/squad-details/164"
              

            ]


            

        },
        {
            TeamName:"SRH",
            WinningCount:2,
            TeamPlayers:[
                "Pat Cummins","Travis Head","Bhuvneshwar Kumar","Aiden Makram","Mayank Agarwal","Heinrich Klassen","Akash Singh","Nitish Kumar Reddy","Washington Sundar","Abhishek Sharma","Glenn Phillips"
            ],
            Images:[
                "https://www.iplt20.com/teams/royal-challengers-bengaluru/squad-details/164"
            ]
        },
        {
            TeamName:"MI",
            WinningCount:5,
            TeamPlayers:[
                "Rohit Sharma","Hardik Pandya","Ishan Kishan","Surya Kumar Yadav","Jasprit Bumrah","Tim David","Tilak varma","Gerald Coetzee","Dewald Brewis","Romario Shepherd","Piyush Chawla","Harvik Desai"
            ],
            Images:[
                "https://www.iplt20.com/teams/royal-challengers-bengaluru/squad-details/164"
            ]
        },
        {
            TeamName:"KKR",
            WinningCount:5,
            TeamPlayers:[
                "Shreyas Iyer","Rinku Singh","Nitish Rana","Rahmanallah Gurbaz","Phil Salt","Manish Paandey","Andre Russell","Venkatesh Iyer","Mitchel Starc","Chetan Sakariya","Varu Chakravarthy","Vaibav Arora"
            ],
            Images:[
                "https://www.iplt20.com/teams/royal-challengers-bengaluru/squad-details/164"
            ]
        },
        {
           
            TeamName:"DC",
            WinningCount:5,
            TeamPlayers:[
                "Rishabh Pant","David Warner","Prithvi Shan","Yash Dhull","Shai Hope","Axar Patel","Lalit Yadav","Mitchel Marsh","Kuldeep Yadav","Ishanth Sharma","Jhye Richardson","Rasikh Dar"
            ] ,
            Images:[
                "https://www.iplt20.com/teams/royal-challengers-bengaluru/squad-details/164"
            ]
        },
        {
            
            TeamName:"RR",
            WinningCount:5,
            TeamPlayers:[
                "Sanju Samson","Jos Buttler","Yashasvi Jaiswal","Dhruv Jurel","Riyan Parag","Kunal Rathore","Avesh Khan","Trent Boult","Yuzi Chahal","Keshav Maharaj","Kuldeep Sen","Ravichandran Aswin"
            ],
            Images:[
                "https://www.iplt20.com/teams/royal-challengers-bengaluru/squad-details/164"
            ]
        },
        {
            
            TeamName:"GT",
            WinningCount:5,
            TeamPlayers:[
                "Shubman Gill","David Miller","Rashid Khan","Matthew Wade","BR Sharath","Vijay Shankar","Sharukh Khan","Darshan Nalkande","Jayant Yadav","Spencer Johnson","Noor Ahmed","Umesh Yadav"
            ],
            Images:[
                "https://www.iplt20.com/teams/royal-challengers-bengaluru/squad-details/164"
            ] 
        },
        {
            
            TeamName:"LSG",
            WinningCount:5,
            TeamPlayers:[
                "KL Rahul","Devdutt Padikkal","Quinton De Kock","Nicholas Pooran","Ashton Turner","Krunal Pandya","Kyle Mayers","Marcus Stonis","Arshin Kulkarni","David Willey","MOHD. Arshad Khan","Yudhvir Singh"
            ],
            Images:[
                "https://www.iplt20.com/teams/royal-challengers-bengaluru/squad-details/164"
            ]
        },
        {
            
            TeamName:"CSK",
            WinningCount:5,
            TeamPlayers:[
                "MS Dhoni","Ruthuraj Gaikwad","Devon Conway","Ajinkya Rahane","Ravindra Jadeja","Moeen Ali","Shivam Dube","Rachin Ravindra","Richard Gleeson","Deepak Chahar","Mukesh Chowdary","Tushar Deshpande"
            ],
            Images:[
               
            ]
        },
        {
            
            TeamName:"PBKS",
            WinningCount:5,
            TeamPlayers:[
                "Shikar Dhawan","Johny Braistow","Jitesh Sharma","Liam Livingstone","Harpreet Bhatia","Shashak Singh","Chris Woakes","Vishawanath Prathap Singh","Ashutosh Sharma","Atharva Taide","Sam Curran","Arshdeep Singh","Harshal Patel"
            ],
            Images:[
                "https://www.iplt20.com/teams/royal-challengers-bengaluru/squad-details/164"
            ]
        }
    ]
    return(
        <React.Fragment>
        {
            TeamDetails.map((value,index)=>{
                return(
                    
                    <>
                    
                  
                    <h2>{index+1}.  {value.TeamName}</h2>
                    {
                        value.TeamPlayers.map(player=>
                            <h4> {player}</h4>
                           
                          
                        )
                    }
                    </>
                
                  
                )
            })
        }
        </React.Fragment>
    )
}
export default Ipl2024