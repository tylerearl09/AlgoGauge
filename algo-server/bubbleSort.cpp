#include <bits/stdc++.h>
#include <iostream>
#include <vector>
#include <fstream>

using namespace std;

template <typename T>
std::vector<T> inArray;

std::string dataType;

template <typename T>
void readFile(std::ifstream &inputFile){
    
    T data;

    while (inputFile >> data) {
        inArray<T>.push_back(data);
    }

    inputFile.close();

}

template <typename T>
void bubbleSort(std::vector<T>& arr) {
    int n = arr.size();
    bool swapped;

    do {
        swapped = false;
        for (int i = 1; i < n; i++) {
            if (arr[i - 1] > arr[i]) {
                std::swap(arr[i - 1], arr[i]);
                swapped = true;
            }
        }
        n--; // Reduce the range to avoid already sorted elements
    } while (swapped);
}

template <typename T>
void writeFile()
{
    std::ofstream outputFile("bubbleSorted.txt");
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
        bubbleSort<int>(inArray<int>);
        writeFile<int>();
    }
    else if (dataType == "double")
    {
        readFile<double>(inputFile);
        bubbleSort<double>(inArray<double>);
        writeFile<double>();
    }
    else if (dataType == "float")
    {
        readFile<float>(inputFile);
        bubbleSort<float>(inArray<float>);
        writeFile<float>();
    }
    else if (dataType == "string")
    {
        readFile<string>(inputFile);
        bubbleSort<string>(inArray<string>);
        writeFile<string>();
    }
    else return -1;

    return 0;
}