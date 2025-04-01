import {APIData} from './types';

export async function postMessage(message: string = ''): Promise<APIData | null> {
    try {
        const response = await fetch('http://57.129.22.109:8010/ask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            question: message
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: APIData = await response.json();
        console.log('API Success:', data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }

    return null;
}


export async function getDocument(filename: string): Promise<Blob | null> {
  // Validate filename format
  if (!/^[a-zA-Z0-9_\-.]+\.pdf$/i.test(filename)) {
    console.error('Invalid filename');
    return null;
  }

  try {
    const response = await fetch(`/documents/${encodeURIComponent(filename)}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.blob();
  } catch (error) {
    console.error('Failed to fetch PDF:', error);
    return null;
  }
}