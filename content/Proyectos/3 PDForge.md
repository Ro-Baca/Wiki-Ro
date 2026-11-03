---
title: PDForge
tags:
  - software
noteOrder: "3"
---
# PDForge
PDForge is a fast, lightweight, and offline desktop application for PDF manipulation. It provides 9 tools in a clean interface with no unknown uploads or information tracking.

## Built-In Tools
1. **Merge PDF**: Combine multiple PDFs in custom order with file rotation controls.
2. **Split PDF**: Extract custom page ranges or split at fixed intervals.
3. **Compress PDF**: Shrink file sizes using optimization profiles with a percentage-saved indicator.
4. **PDF to Word**: Convert PDF documents into editable `.docx` files.
5. **JPG to PDF**: Convert JPG/PNG images into a PDF with configurable page size, orientation, and margins.
6. **HTML to PDF**: Convert local `.html` files or live URLs into PDFs.
7. **OCR PDF**: Inject a searchable text layer into scanned documents (supports English and Spanish).
8. **Translate PDF**: Translate PDF text blocks while preserving exact layouts.
9. **PDF to Markdown**: Extract document hierarchy (H1–H3), lists, and multi-column tables into LLM-ready `.md` files.

## Tech Stack
PDForge relies on Open-Source libraries to run localy:

| Feature                    | Local Processing Engine                                  |
| -------------------------- | -------------------------------------------------------- |
| **Desktop GUI & Previews** | Native GTK3 (`PyGObject`) + Poppler (`pdftoppm`)         |
| **Merge / Split / Rotate** | Poppler (`pdfunite`) & Ghostscript (`gs`)                |
| **Compress PDF**           | Ghostscript (`-dPDFSETTINGS=/screen, /ebook, /printer`)  |
| **PDF to Word**            | Poppler XML layout parser + OpenXML generator            |
| **JPG to PDF**             | Pillow (`PIL`) vector image container                    |
| **HTML to PDF**            | Headless LibreOffice / Built-in Cairo HTML vector engine |
| **OCR PDF**                | Tesseract OCR / Ghostscript stream normalizer            |
| **Translate PDF**          | PyCairo PDF coordinate reconstruction + Noto CJK fonts   |
| **PDF to Markdown**        | Poppler spatial XML parser                               |

# Performance & Memory Profile

|Tool|RAM Usage (Active)|CPU Impact|Processing Time (10 pages)|Output|
|---|---|---|---|---|
|**Merge PDF**|~30 MB|Negligible|< 0.1 sec|`.pdf`|
|**Split PDF**|~30 MB|Negligible|< 0.1 sec|`.pdf` (numbered)|
|**JPG to PDF**|~40 MB|Very Low|< 0.2 sec|`.pdf`|
|**PDF to Markdown**|~60 MB|Low|~0.4 sec|`.md`|
|**Compress PDF**|~150 MB|Medium|1 – 3 sec|`.pdf`|
|**PDF to Word**|~180 MB|Medium|2 – 4 sec|`.docx`|
|**HTML to PDF**|~200 MB|Medium|2 – 3 sec|`.pdf`|
|**OCR PDF**|~350 MB|High (Burst)|8 – 15 sec|`.pdf` (searchable)|
|**Translate PDF**|~100 MB|Low|2 – 4 sec|`.pdf`|
*Idle Memory:* **~45 MB RAM**. Startup time: **< 0.4 seconds**.

# System Requirements

The application runs directly on Linux using standard system packages:
```bash
# Ubuntu / Debian
sudo apt update && sudo apt install -y \
python3-gi \
python3-gi-cairo \
gir1.2-gtk-3.0 \
poppler-utils \
ghostscript \
libreoffice \
fonts-noto-cjk
```

*(Optional for scanned document OCR)*:
```bash
sudo apt install -y tesseract-ocr tesseract-ocr-eng tesseract-ocr-spa
```

  

# Project Structure

```text
PDForge/
├── run_pdforge.sh            # Main executable launcher script
├── assets/                   # Replaceable SVG vector graphics
│   ├── brand/                # App logo and empty dropzone illustrations
│   ├── tools/                # Icons for all 9 PDF tools
│   └── ui/                   # Navigation, rotate, and file queue action icons
├── src/
│   ├── pdforge_app.py        # Native GTK3 GUI, event handlers, and responsive layout
│   ├── pdforge_engine.py     # Backend implementations
│   └── pdforge_test_data.py  # Synthetic test data generator
├── test_data/                # Sample files for 1-click testing
└── output/                   # Default destination folder for processed files
```
  
## Replaceable Graphics (`assets/`)
All icons in PDForge are standalone geometric SVG files. You can customize the look of the app at any time simply by replacing files with the same name:
### `assets/brand/` 
- `pdforge-logo.svg`: Main app icon and sidebar brand badge.
- `dropzone-empty.svg`: Empty-state illustration inside the file queue panel.

### `assets/tools/`
- `tool-merge-pdf.svg`: Merge PDF icon
- `tool-split-pdf.svg`: Split PDF icon
- `tool-compress-pdf.svg`: Compress PDF icon
- `tool-pdf-to-word.svg`: PDF to Word icon
- `tool-jpg-to-pdf.svg`: JPG to PDF icon
- `tool-html-to-pdf.svg`: HTML to PDF icon
- `tool-ocr-pdf.svg`: OCR PDF icon
- `tool-translate-pdf.svg`: Translate PDF icon
- `tool-pdf-to-markdown.svg`: PDF to Markdown icon

### `assets/ui/`
- `ui-add-file.svg`: Add file(s) button icon
- `ui-rotate-cw.svg` & `ui-rotate-ccw.svg`: Page rotation buttons
- `ui-move-up.svg` & `ui-move-down.svg`: Reorder queue items
- `ui-remove-file.svg`: Delete file from queue
- `ui-open-folder.svg`: Open output folder
- `ui-status-success.svg` & `ui-status-warning.svg`: Task completion status icons
  
I like the plan, if I end all through the Phase 8 in 6 months I will still have time to develop my research. regarding your questions:

1. I don't have access just now to a NVIDIA GPU but I may be able to get one eventually or maybe use the cloud (I am not sure how that works). 
2. I do want to go with the motivation shortcut.
3. I have an idea not very developed, I want to create a behavioral root similar to CASIO's robbot "Moflin", it works as a continuous state machine, the internal processor performs frequencies and tones extraction to identify the vocal signatures of their caregivers and input's it in an algorithm that takes them into a two-dimensional space of emotions. Repeated interactions modify the weights of the algorithm until a "personality" is consolidated. I want something similar with a movable robot for social interaction studies.

also, please create the learning_rodemap.md in the workspace for me to have access to it in the future. 
