# Pokemon

## Summary
This is an entertaining application as one could capture their lovely pokemons. As and when an user catches a pokemon, score is updated. An user can catch a pokemon only once. User will lose the game if a pokemon is captured twice. Try to break the top score recorded.

## Installation Guide
* User has to download all files from GitHub repository
* User can either clone the repository or can download all files manually unzipping might take a while though
* `Package.json` file has required depencies to be installed. So, user can type `npm install` to install all needed packages
* User can create a new react application by using `create-react-app <your app name>`
* Once your react app is created, user can type `npm start` to run the application

## Technologies Used
- HTML : Basic skeleton of application basically used to append react components to DOM
- Bootstrap : For application styling
- React : 

## Application Functioning
Type `npm start` from command line. Functioning of application is shown below

![Site](gif/VocabularyBuilder1.gif)

On run of the application shows a list of pokemons that are prone to capture. You can click on your desired pokemon to capture it. Upon capturing a pokemon, your score is increased by one. You lose the game when a pokemon is captured twice. To confuse you, pokemon would randomly position itself each time you capture a pokemon.

## Code Snippet

*Pokemon Component*

```R
  return (
    
      <div className="row">
        <div className="col-md-2"></div>

        <div className="col-md-8">
        <div className="imgContainer d-inline-flex flex-row" style={Style.imgContainer}>
          <img alt={props.name} src={props.image} className="img" style={Style.img}
            onClick={() => props.randomizeArr(props.id)} className="randomize"></img>

        </div>
        </div>
        <div className="col-md-2"></div>
      
    </div>

  )
```
> This is a pokemon react component to generate all pokemons to the page

*App.js*

```R
randomizeArr = id => {
    console.log(id);
    if (!idArr.includes(id)) {
      idArr.push(id);
      score = score + 1;
      value = "CAPTURED !"
    }
    else {
      console.log("OOPS! ALREADY CAPTURED!");
      if (score > topscore)
        topscore = score;
      idArr = [];
      score = 0;
      value = "OOPS! ALREADY CAPTURED!";
    }
    console.log(idArr);
    shuffle(pokemon);
    this.setState({ pokemon, score, topscore, value });
  }
```

> This is the logic behind functioning of this application. Each time when an pokemon is captured, all pokemons randomly changes their position. When all logic is done, a new state is set, so that all logics applied are rendered to DOM appropriately

## Learning Points

On developing this application, gained a lot knowledge on react and it's functionality. Was able to have visualize understanding of react components

## Author Links
[LinkedIn](https://www.linkedin.com/in/mahisha-gunasekaran-0a780a88/)

[GitHub](https://github.com/Mahi-Mani)