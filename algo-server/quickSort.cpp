#include <iostream>
#include <fstream>
#include <vector>

std::string dataType;

template <typename T>
std::vector<T> inArray;

template <typename T>
int partition(std::vector<T>& arr, int low, int high) {
    T pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            std::swap(arr[i], arr[j]);
        }
    }

    std::swap(arr[i + 1], arr[high]);
    return i + 1;
}

template <typename T>
void quickSort(std::vector<T>& arr, int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

template <typename T>
void readFile(std::ifstream &inputFile){
    
    T data;

    while (inputFile >> data) {
        inArray<T>.push_back(data);
    }

    inputFile.close();

}

template <typename T>
void writeFile()
{
    std::ofstream outputFile("quickSorted.txt");
    for (T value: inArray<T>)
    {
        outputFile << value << std::endl;
    }
}

int main(int argc, char* argv[]) {
    if (argc != 2) {
        std::cerr << "Usage: " << argv[0] << " <input_file>" << std::endl;
        return 1;
    }

    const char* inputFileName = argv[1];
    std::ifstream inputFile(inputFileName);

    if (!inputFile.is_open()) {
        std::cerr << "Error: Unable to open the input file." << std::endl;
        return 1;
    }

    inputFile >> dataType;

    if (dataType == "int")
    {
        readFile<int>(inputFile);        
        quickSort<int>(inArray<int>, 0, inArray<int>.size() - 1);
        writeFile<int>();
    }
    else if (dataType == "double")
    {
        readFile<double>(inputFile);
        quickSort<double>(inArray<double>, 0, inArray<double>.size() - 1);
        writeFile<double>();
    }
    else if (dataType == "float")
    {
        readFile<float>(inputFile);
        quickSort<float>(inArray<float>, 0, inArray<float>.size() - 1);
        writeFile<float>();
    }
    else if (dataType == "string")
    {
        readFile<std::string>(inputFile);
        quickSort<std::string>(inArray<std::string>, 0, inArray<std::string>.size() - 1);
        writeFile<std::string>();
    }
    else return -1;

    return 0;
}