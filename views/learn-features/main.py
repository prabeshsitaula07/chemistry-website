import os

# HTML content to replace existing content
new_html_content = """

<%- include('rxnlayout.ejs', { 
    
    title: '2,4DNP-test', 

    general_reaction: `General reaction hune container ho yo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero illum nostrum fugiat vitae vel maiores distinctio eos similique,quaerat ea.`,

    image: '../../images/2,4DNP.png',
    
    description: 'A',
    
    example: 'A',
    
    application: 'A',
    
    modern_application: 'a',
    
    history: ''
}) %>
"""


# Function to replace content in all existing files
# Modify the replace_content_in_files function
def replace_content_in_files(directory_path, file_extension='.ejs'):
    try:
        # Get a list of all files with the specified extension in the current directory
        files = [file for file in os.listdir(directory_path) if file.endswith(file_extension)]

        # Print debug information
        print(f"Files to process: {files}")

        # Iterate through each file and replace its content with the new HTML content
        for file_name in files:
            file_path = os.path.join(directory_path, file_name)
            print(f"Processing file: {file_path}")
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(new_html_content)

    except Exception as e:
        # Print the error message for debugging
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    # Replace "." with the actual path to your project if the files are not in the same directory as the script
    replace_content_in_files("./views/learn-features/reactions")