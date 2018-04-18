# finesse-lords
Shakil Rafi, Ibnul Jahan, Tiffany Moi, Arif Roktim

## Dataset: Parties in New York City (2016)
This dataset contains information on noise complaints about parties throughout New York City during 2016 including coordinates and number of calls from each location.

[Dataset](https://www.kaggle.com/somesnm/partynyc)

## Explanation of project
We will cast small icons over certain locations on a New York City map, and these locations will represent the different stores in our dataset. We have numerous sources that will help us achieve this, including: https://medium.com/@andybarefoot/making-a-map-using-d3-js-8aa3637304ee. 
After the points are charted, we will make different size balls to represent the severity of the noise complaints (number of calls). This will serve as our MVP, and if we can achieve this, we will expand.


## D3 Usage
We will use a map made using d3 as well as circles as markers on each location.

## Getting Started

### Dependencies
1. Python 2.7
   ```bash
   $ sudo apt-get install python2.7
   ```
2. Pip
   ```bash
   $ curl https://bootstrap.pypa.io/get-pip.py | sudo python 2.7
   ```
3. Flask
   ```bash
   $ pip install flask --user
   ```

### Setup

0. (Optional) Create and activate a virtual environment 
   ```bash
   $ virtualenv <name>
   $ . <name>/bin/activate
   ```
1. Install all dependencies listed above
2. Clone this repository
   ```bash
   $ git clone https://github.com/srafi1/finesse-lords
   $ cd finesse-lords
   ```
3. Launch the app
   ```bash
   $ python app.py
   ```
4. Open a browser window and go to `http://localhost:5000`
