from PIL import Image, ImageDraw, ImageFont

def create_logo_image(size):
    # Create a new image with blue background
    img = Image.new("RGBA", (size, size), "#1A3A6B")
    draw = ImageDraw.Draw(img)
    
    # Draw the text "#41" in orange
    # Use a bold font for clarity at small sizes
    font_size = int(size * 0.34) # font size is 34% of the image size
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Georgia Bold.ttf", font_size)
    except IOError:
        try:
            font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Georgia.ttf", font_size)
        except IOError:
            font = ImageFont.load_default()
        
    text = "#41"
    
    # Get text width and height to center it
    try:
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        y_offset = bbox[1]
    except AttributeError:
        # Fallback for older PIL versions
        text_width, text_height = draw.textsize(text, font=font)
        y_offset = 0
        
    # Center coordinates
    x = (size - text_width) / 2
    # Adjust visually to center the text box
    y = (size - text_height) / 2 - y_offset
    
    draw.text((x, y), text, fill="#E57200", font=font)
    
    return img

# Generate main sizes
img_512 = create_logo_image(512)
img_512.save("app/icon.png", "PNG")

img_180 = create_logo_image(180)
img_180.save("app/apple-icon.png", "PNG")

# Generate favicon.ico with multiple sizes (16, 32, 48)
sizes = [(16, 16), (32, 32), (48, 48)]
icon_imgs = [create_logo_image(s[0]) for s in sizes]
# Save as ICO (using 16x16, 32x32, 48x48)
icon_imgs[0].save("app/favicon.ico", format="ICO", sizes=sizes, append_images=icon_imgs[1:])
print("Icons successfully generated!")
