# Al-Kassis Frontend Demo

## Overview

This repository is for the user interface (frontend) of the Al-Kassis full stack application, designed to streamline and expedite a production process.

The frontend includes several pages:

1. **Chemicals**: A visual repository to monitor chemical quantities, with a warning threshold for low levels.
2. **Alloy**: Displays information about the default alloy.
3. **Press**: Contains three pages:
   - **Shapes**: Stores and displays shape details like name, width, length, and thickness.
   - **Orders**: Manages orders and calculates required metal/gold based on order size, shape dimensions, and alloy properties. Includes a `group` function to improve accuracy when orders contain shapes with different widths.
   - **Production**: Tracks order production status and displays relevant data to assist in the production process.

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/Nad1m-A-A/backend-demo.git
   ```

2. Navigate to the project directory and install dependencies:

```she
   cd frontend-demo
   
   npm install
```

3. Create a `.env` file then add the following environment variable which is the url for the API:

   ```
   ENDPOINT=https://backend-demo-sigma.vercel.app/
   ```

4. Run the following command to start a development server:
   ```
   npm run dev
   ```

## How to Use

**Shapes:**

1. Begin by creating a shape.
2. If "half" was chosen as the shape type, the required weight for future orders will be doubled.
3. The thickness of the shape must match one available in the alloy's thickness/length collection.
4. The thickness input suggests the possible measurement.

**Orders:**

1. After creating a shape, add your first order.
2. If no name is specified, the current date will be used as order name.
3. Select shapes of the same thickness (a production requirement).
4. Add quantities and click 'Done' to save.
5. one each created order, use the provided buttons for delete, edit, and `group` (explained in the overview).

**Production:**

1. Inputting values in production fields will update the app's outputs.
2. The fields retain previously entered values as placeholders and sum them with new entries.

**Chemicals:**

1. The threshold triggers a notification when a chemical is running low.
2. The count turns red if it equals or falls below the threshold.

**Alloy:**

1. This static page requires no interaction.
2. Modify alloy dimensions directly in the database if needed.
